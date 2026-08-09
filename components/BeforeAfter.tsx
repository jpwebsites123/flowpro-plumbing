import Image from "next/image";
import { beforeAfterProjects } from "@/lib/data";

export default function BeforeAfter() {
  return (
    <div className="grid gap-10 lg:grid-cols-3">
      {beforeAfterProjects.map((project) => (
        <div key={project.title} className="card-surface p-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={project.before}
                alt={`${project.title} — before, demo project photo`}
                fill
                sizes="220px"
                className="object-cover"
              />
              <span className="absolute top-2 left-2 rounded-full bg-navy-900/85 text-white text-[11px] font-semibold px-2.5 py-1">
                Before
              </span>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={project.after}
                alt={`${project.title} — after, demo project photo`}
                fill
                sizes="220px"
                className="object-cover"
              />
              <span className="absolute top-2 left-2 rounded-full bg-flow-500 text-white text-[11px] font-semibold px-2.5 py-1">
                After
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-navy-900">{project.title}</p>
          <p className="text-xs text-navy-500">Demonstration project photo</p>
        </div>
      ))}
    </div>
  );
}
