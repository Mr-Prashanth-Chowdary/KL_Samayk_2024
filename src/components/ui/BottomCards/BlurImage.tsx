"use client";
// import React, { useState } from "react";
import { useState } from "react";
import { cn } from "../../../lib/utils";
import { ImageProps } from "./apple-cards-carousel";


export const BlurImage = ({
    height, width, src, className, alt, ...rest
}: ImageProps) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                "transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            // blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of is a beautiful view"}
            {...rest} />
    );
};
