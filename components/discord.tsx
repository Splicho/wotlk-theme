import { Card } from "@/components/ui/card";

export default function Discord() {
  return (
    <Card className="w-full mt-6 bg-slate-800 text-white p-6 relative overflow-hidden min-h-[140px]">
      <iframe 
        src="https://discord.com/widget?id=986029592164855818&theme=dark" 
        width="100%" 
        height="385" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className="rounded-lg"
      />
    </Card>
  );
}