"use client";

import { Suspense, lazy, useEffect } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

// import Spline from '@splinetool/react-spline/next';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  useEffect(() => {
    // Remove Spline watermark from shadow DOM if present
    const interval = setInterval(() => {
      const viewer = document.querySelector('spline-viewer');
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.querySelector('#logo');
        if (logo) {
          logo.remove();
          clearInterval(interval);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
