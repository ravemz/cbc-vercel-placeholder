import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  companyLogo: { src: string; alt: string; width?: number; sizes?: string };
  testimonialText: string;
  attribution: string;
  attributionTitle?: string;
  className?: string;
}

export default function TestimonialCard({
  companyLogo,
  testimonialText,
  attribution,
  attributionTitle,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8 ${className}`}
    >
      {companyLogo.src && (
        <div className="flex justify-center mb-6">
          <div className="h-16 flex items-center">
            <Image
              src={companyLogo.src}
              alt={companyLogo.alt}
              width={companyLogo.width || 120}
              height={64}
              className="max-h-16 w-auto object-contain"
              sizes={companyLogo.sizes || "120px"}
            />
          </div>
        </div>
      )}

      <div className="mb-6">
        <div className="mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cb-orange">
            <path
              d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
              fill="currentColor"
            />
          </svg>
        </div>

        <p className="text-gray-700 text-base leading-relaxed italic">
          &ldquo;{testimonialText}&rdquo;
        </p>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <h4 className="text-gray-900 font-semibold text-sm">{attribution}</h4>
        {attributionTitle && <p className="text-gray-500 text-sm mt-1">{attributionTitle}</p>}
      </div>
    </div>
  );
}
