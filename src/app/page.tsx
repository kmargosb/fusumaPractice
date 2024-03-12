import { Button } from "@/components/ui/button"
import Alert from "../components/Alert"
import AccordionComponent from "@/components/Accordion";
import { CarouselComponent } from "@/components/CarouselComponent";
import CalendarComponent from "../components/CalendarComponent";

export default function Home() {

  interface User {
    name: string;
    id: number;
    isMarried: boolean
  }

  const user: User = {
    name: "nelson",
    id: 24,
    isMarried: false
  }

  return (
    <div className="w-screen flex justify-center items-center flex-col gap-10 h-screen">
      <Button variant="destructive" size="lg">Hola</Button>
      <AccordionComponent />
      <Alert />
      <CarouselComponent />
      <CalendarComponent />
    </div>
  );
}
