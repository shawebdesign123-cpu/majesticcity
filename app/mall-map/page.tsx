"use client";

import { useEffect, useRef, useState } from "react";

type Store = {
    id: string;
    name: string;
    category: string;
    mapRegion: string;
};

const mockStores: Store[] = [
    { id: "1", name: "ALDO", category: "Fashion", mapRegion: "shop-001" },
    { id: "2", name: "PUMA", category: "Sports", mapRegion: "shop-002" },
    { id: "3", name: "NIKE", category: "Sports", mapRegion: "shop-003" },
    { id: "4", name: "APPLE", category: "Electronics", mapRegion: "shop-004" },
    { id: "5", name: "H&M", category: "Fashion", mapRegion: "shop-005" },
    { id: "6", name: "ZARA", category: "Fashion", mapRegion: "shop-006" },
    { id: "7", name: "SAMSUNG", category: "Electronics", mapRegion: "shop-007" },
    { id: "8", name: "ADIDAS", category: "Sports", mapRegion: "shop-008" },
    { id: "9", name: "LEVI'S", category: "Fashion", mapRegion: "shop-009" },
    { id: "10", name: "FOOD CITY", category: "Grocery", mapRegion: "shop-010" },
    { id: "11", name: "KFC", category: "Food", mapRegion: "shop-011" },
    { id: "12", name: "BURGER KING", category: "Food", mapRegion: "shop-012" },
    { id: "13", name: "SEPHORA", category: "Beauty", mapRegion: "shop-013" },
    { id: "14", name: "MAC", category: "Beauty", mapRegion: "shop-014" },
    { id: "15", name: "MINISO", category: "Lifestyle", mapRegion: "shop-015" },
    { id: "16", name: "SONY", category: "Electronics", mapRegion: "shop-016" },
    { id: "17", name: "LG", category: "Electronics", mapRegion: "shop-017" },
    { id: "18", name: "DECATHLON", category: "Sports", mapRegion: "shop-018" },
    { id: "19", name: "HUGO BOSS", category: "Fashion", mapRegion: "shop-019" },
    { id: "20", name: "LIFESTYLE", category: "Fashion", mapRegion: "shop-020" },
    { id: "21", name: "NESTLE", category: "Food", mapRegion: "shop-021" },
    { id: "22", name: "STARBUCKS", category: "Food", mapRegion: "shop-022" },
];

export default function MallMapPage() {
    const mapRef = useRef<HTMLDivElement>(null);

    const [svg, setSvg] = useState("");
    const [selectedStore, setSelectedStore] =
        useState<Store | null>(null);

    const [scale, setScale] = useState(1);

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [dragging, setDragging] = useState(false);

    const pointerStart = useRef({
        x: 0,
        y: 0,
    });

    const positionStart = useRef({
        x: 0,
        y: 0,
    });

    const didDrag = useRef(false);

    /*
     * LOAD SVG
     */
    useEffect(() => {
        fetch("/maps/level-02.svg")
            .then((res) => res.text())
            .then((data) => {
                setSvg(data);
            })
            .catch((error) => {
                console.error("SVG loading error:", error);
            });
    }, []);

    /*
     * PREPARE SVG
     */
    useEffect(() => {
        if (!svg || !mapRef.current) return;

        const container = mapRef.current;
        const svgElement = container.querySelector("svg");

        if (!svgElement) return;

        /*
         * ============================================
         * FIND SHOP REGIONS
         * ============================================
         */

        const shopElements = Array.from(
            svgElement.querySelectorAll('[id^="shop-"]')
        );

        const getStoreForShop = (shopId: string) => {
            const shopNumber = Number(shopId.replace("shop-", ""));

            return mockStores.find(
                (item) =>
                    Number(item.mapRegion.replace("shop-", "")) ===
                    shopNumber
            );
        };

        const getShopGeometry = (shop: Element) =>
            Array.from(
                shop.querySelectorAll(
                    "polygon, path, rect, ellipse, circle, polyline, line"
                )
            );

        const clearSelection = () => {
            svgElement
                .querySelectorAll(".mall-shop-selected")
                .forEach((element) => {
                    element.classList.remove("mall-shop-selected");
                });
        };

        const selectShop = (shop: Element, store: Store) => {
            clearSelection();
            getShopGeometry(shop).forEach((geometry) => {
                geometry.classList.add("mall-shop-selected");
            });
            setSelectedStore(store);
        };

        console.log("Found shops:", shopElements.length);

        /*
         * ============================================
         * MAKE SHOP REGIONS CLICKABLE
         * ============================================
         */

        shopElements.forEach((element) => {
            const shopId = element.getAttribute("id");

            if (!shopId) return;

            const store = getStoreForShop(shopId);

            if (!store) return;

            element.classList.add("mall-shop");

            getShopGeometry(element).forEach((geometry) => {
                geometry.classList.add("mall-shop-hit-area");
                (geometry as SVGElement).style.pointerEvents = "all";

                const handleShopClick = (event: Event) => {
                    event.stopPropagation();

                    const clickedGeometry = event.currentTarget as Element;
                    const shop = clickedGeometry.closest('[id^="shop-"]');
                    const clickedShopId = shop?.getAttribute("id");

                    if (!shop || !clickedShopId) return;

                    const store = getStoreForShop(clickedShopId);

                    if (!store) return;

                    selectShop(shop, store);
                };

                geometry.addEventListener("click", handleShopClick);

                (
                    geometry as SVGElement & {
                        __shopClick?: EventListener;
                    }
                ).__shopClick = handleShopClick;
            });
        });

        /*
         * ============================================
         * REPLACE SHOP TEXT
         * ============================================
         */

        const textElements = Array.from(
            svgElement.querySelectorAll(
                "text, tspan"
            )
        );

        textElements.forEach((textElement) => {
            const originalText =
                textElement.textContent
                    ?.trim()
                    .replace(/\s+/g, " ");

            if (!originalText) return;

            const match = originalText.match(
                /^SHOP\s*0?(\d+)$/i
            );

            if (!match) return;

            const shopNumber = Number(match[1]);

            const store = mockStores.find(
                (item) => {
                    const number = Number(
                        item.mapRegion.replace(
                            "shop-",
                            ""
                        )
                    );

                    return number === shopNumber;
                }
            );

            if (!store) return;

            /*
             * Replace label
             */
            textElement.textContent =
                store.name;

            /*
             * Make label clickable
             */
            textElement.classList.add(
                "mall-shop-label"
            );

            /*
             * IMPORTANT:
             * Store the shop ID on the label.
             */
            textElement.setAttribute(
                "data-shop-id",
                store.mapRegion
            );

            /*
             * Click label
             */
            const handleLabelClick = (
                event: Event
            ) => {
                event.stopPropagation();

                console.log(
                    "CLICKED LABEL:",
                    store
                );

                const shop = Array.from(
                    svgElement.querySelectorAll('[id^="shop-"]')
                ).find((element) => {
                    const shopId = element.getAttribute("id");
                    return shopId && getStoreForShop(shopId)?.id === store.id;
                });

                if (shop) {
                    selectShop(shop, store);
                }
            };

            textElement.addEventListener(
                "click",
                handleLabelClick
            );

            /*
             * Save handler
             */
            (
                textElement as SVGElement & {
                    __labelClick?: EventListener;
                }
            ).__labelClick = handleLabelClick;
        });

        /*
         * ============================================
         * CLEANUP
         * ============================================
         */

        return () => {
            shopElements.forEach((element) => {
                getShopGeometry(element).forEach((geometry) => {
                    const el =
                        geometry as SVGElement & {
                            __shopClick?: EventListener;
                        };

                    if (el.__shopClick) {
                        geometry.removeEventListener(
                            "click",
                            el.__shopClick
                        );
                    }
                });
            });

            textElements.forEach((element) => {
                const el =
                    element as SVGElement & {
                        __labelClick?: EventListener;
                    };

                if (el.__labelClick) {
                    element.removeEventListener(
                        "click",
                        el.__labelClick
                    );
                }
            });
        };
    }, [svg]);

    /*
     * ------------------------------------------------
     * DRAG
     * ------------------------------------------------
     */

    const handlePointerDown = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        const target = event.target as Element;

        if (
            target.closest(
                ".mall-shop-hit-area, .mall-shop-label"
            )
        ) {
            return;
        }

        pointerStart.current = {
            x: event.clientX,
            y: event.clientY,
        };

        positionStart.current = {
            x: position.x,
            y: position.y,
        };

        didDrag.current = false;

        setDragging(true);

        event.currentTarget.setPointerCapture(
            event.pointerId
        );
    };

    const handlePointerMove = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        if (!dragging) return;

        const dx =
            event.clientX -
            pointerStart.current.x;

        const dy =
            event.clientY -
            pointerStart.current.y;

        /*
         * Consider it a drag only after
         * moving more than 5px.
         */
        if (
            Math.abs(dx) > 5 ||
            Math.abs(dy) > 5
        ) {
            didDrag.current = true;
        }

        setPosition({
            x: positionStart.current.x + dx,
            y: positionStart.current.y + dy,
        });
    };

    const handlePointerUp = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        setDragging(false);

        if (
            event.currentTarget.hasPointerCapture(
                event.pointerId
            )
        ) {
            event.currentTarget.releasePointerCapture(
                event.pointerId
            );
        }
    };

    /*
     * ------------------------------------------------
     * ZOOM
     * ------------------------------------------------
     */

    const zoomIn = () => {
        setScale((value) =>
            Math.min(value + 0.2, 4)
        );
    };

    const zoomOut = () => {
        setScale((value) =>
            Math.max(value - 0.2, 0.5)
        );
    };

    /*
     * ------------------------------------------------
     * RESET
     * ------------------------------------------------
     */

    const reset = () => {
        setScale(1);

        setPosition({
            x: 0,
            y: 0,
        });

        setSelectedStore(null);

        mapRef.current
            ?.querySelectorAll(
                ".mall-shop-selected"
            )
            .forEach((element) => {
                element.classList.remove(
                    "mall-shop-selected"
                );
            });
    };

    return (
        <main className="min-h-screen bg-[#2f3136] text-white">
            {/* HEADER */}

            <header className="absolute inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-white/10 bg-[#25272c]/95 px-6 shadow-lg backdrop-blur-sm">
                <div>
                    <h1 className="text-xl font-semibold tracking-wide">
                        Mall Map
                    </h1>

                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                        Level 01
                    </p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={zoomOut}
                        aria-label="Zoom out"
                        className="h-11 w-11 rounded-full border border-white/15 bg-[#3b3e45] text-xl text-white transition hover:bg-[#4a4d55]"
                    >
                        −
                    </button>

                    <button
                        onClick={zoomIn}
                        aria-label="Zoom in"
                        className="h-11 w-11 rounded-full border border-white/15 bg-[#3b3e45] text-xl text-white transition hover:bg-[#4a4d55]"
                    >
                        +
                    </button>

                    <button
                        onClick={reset}
                        className="rounded-full border border-white/15 bg-[#3b3e45] px-5 text-sm text-white transition hover:bg-[#4a4d55]"
                    >
                        Reset
                    </button>
                </div>
            </header>

            {/* MAP */}

            <div className="relative min-h-screen overflow-hidden bg-[#303238] pt-20">
                {/* INFO */}

                <div className="absolute left-5 top-25 z-50 rounded-lg border border-white/10 bg-[#25272c]/90 px-5 py-4 shadow-xl backdrop-blur-sm">
                    <p className="font-semibold text-white">
                        Drag to move
                    </p>

                    <p className="text-sm text-white/55">
                        Click a shop to view details
                    </p>
                </div>

                {/* MAP VIEWPORT */}

                <div
                    className={`absolute inset-0 ${dragging
                        ? "cursor-grabbing"
                        : "cursor-grab"
                        }`}
                    style={{
                        touchAction: "none",
                        userSelect: "none",
                    }}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    <div
                        className="absolute left-1/2 top-1/2 rounded-sm bg-[#55575c] shadow-2xl"
                        style={{
                            transform: `
                translate(-50%, -50%)
                translate(${position.x}px, ${position.y}px)
                scale(${scale})
              `,
                            transformOrigin: "center",
                            transition: dragging
                                ? "none"
                                : "transform 200ms ease",
                        }}
                    >
                        <div
                            ref={mapRef}
                            className="mall-map-svg"
                            dangerouslySetInnerHTML={{
                                __html: svg,
                            }}
                        />

                    </div>
                </div>

                {/* STORE DETAILS */}

                {selectedStore && (
                    <div className="absolute bottom-6 left-1/2 z-50 w-90 max-w-[calc(100%-30px)] -translate-x-1/2 rounded-xl border border-white/10 bg-[#25272c]/95 p-5 text-white shadow-2xl backdrop-blur-sm">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f2c94c]">
                                    {selectedStore.category}
                                </p>

                                <h2 className="mt-1 text-2xl font-bold">
                                    {selectedStore.name}
                                </h2>

                                <p className="mt-2 text-sm text-white/45">
                                    {selectedStore.mapRegion}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    setSelectedStore(null);
                                    mapRef.current
                                        ?.querySelectorAll(
                                            ".mall-shop-selected"
                                        )
                                        .forEach((element) => {
                                            element.classList.remove(
                                                "mall-shop-selected"
                                            );
                                        });
                                }}
                                aria-label="Close store details"
                                className="text-2xl text-white/45 transition hover:text-white"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* SVG STYLES */}

            <style jsx global>{`
  .mall-map-svg {
        overflow: visible;
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
  }

  .mall-map-svg svg {
    display: block;
    width: auto;
    height: 80vh;
    max-width: none;

    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
  }

  /*
   * SHOP
   */
  .mall-map-svg .mall-shop {
    cursor: pointer;
    transition:
      opacity 0.15s ease,
      filter 0.15s ease;
  }

  /*
   * SHOP HOVER
   */
  .mall-map-svg .mall-shop:hover {
    opacity: 0.8;
  }

  /*
   * SELECTED SHOP
   */
    .mall-map-svg .mall-shop-selected {
          fill: #f2c94c !important;
          fill-opacity: 0.92;
          stroke: #fff7d1;
          stroke-width: 3;
        vector-effect: non-scaling-stroke;
        paint-order: stroke;
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.42));
    }


  /*
   * LABEL
   */
  .mall-map-svg .mall-shop-label {
    cursor: pointer;

    user-select: none;
    -webkit-user-select: none;

    font-weight: 600;

    pointer-events: all;
  }

  /*
   * Prevent normal SVG text selection
   */
  .mall-map-svg text,
  .mall-map-svg tspan {
    user-select: none;
    -webkit-user-select: none;
  }
`}</style>
        </main>
    );
}