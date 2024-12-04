import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function ServerStatus() {
  const servers = [
    {
      name: "Frostgaard x15",
      subtitle: "High Five",
      players: 1740,
      status: "online"
    },
    {
      name: "Icevain x7",
      subtitle: "High Five",
      players: 940,
      status: "offline"
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      {servers.map((server, index) => (
        <Card key={index} className="bg-blue-600/90 text-white p-6 relative overflow-hidden min-h-[140px] w-full">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/assets/serverstatus.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-start gap-6 relative z-10">
            {/* Server Icon */}
            <div className="w-16 h-16 rounded-full bg-blue-500/50 flex items-center justify-center border-2 border-blue-400/50">
              <Icon icon="game-icons:sword-brandish" className="w-8 h-8" />
            </div>
            
            {/* Server Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl font-semibold truncate">{server.name}</h3>
              <p className="text-blue-200 text-base">{server.subtitle}</p>
              
              <div className="flex items-center gap-4 mt-6">
                <Link href="/serverstatus" className="hover:bg-blue-500/50 transition-colors rounded-full">
                  <button className="px-4 py-2 bg-blue-500/30 rounded-full text-base">
                    Learn More
                  </button>
                </Link>
                <Link href="/serverstatus" className="hover:bg-blue-500/50 transition-colors rounded-full">
                  <div className="flex items-center gap-2 rounded-full bg-blue-500/30 p-3">
                    <Icon icon="carbon:chart-line" className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Players Count */}
            <div className="text-right shrink-0">
              <span className="text-3xl font-bold">{server.players}</span>
              <div className="flex items-center justify-end gap-2 mt-1">
                <span className={`w-2 h-2 rounded-full ${
                  server.status === 'online' 
                    ? 'bg-green-400 animate-pulse' 
                    : 'bg-red-400'
                }`} />
                <span className={`text-sm uppercase font-medium ${
                  server.status === 'online' 
                    ? 'text-green-400' 
                    : 'text-red-400'
                }`}>
                  {server.status}
                </span>
              </div>
            </div>
          </div>

          {/* Background Gradient Effect */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#112941] to-transparent pointer-events-none z-20 opacity-30" />
        </Card>
      ))}
    </div>
  );
}