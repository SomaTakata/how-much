import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen w-full items-center justify-center ">
      <div className="absolute top-0 right-0  mt-5 mr-5">
        <ModeToggle />
      </div>
      <Tabs defaultValue="yen" className="h-[80%] w-[80%]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="yen">￥</TabsTrigger>
          <TabsTrigger value="doll">$</TabsTrigger>
        </TabsList>
        <TabsContent value="yen">
          <Card className="p-10">
            <div className="flex gap-3">
              <Input
                type="number"
                placeholder="How much money do you have to pay?"
              />
              <Button type="submit">send</Button>
            </div>
            <div className=" gap-2 mt-5 w-full flex">
              <Image
                src="/money_yen/money_1.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_5.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_10.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_100.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_500.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_1000.png"
                alt="Description of the image"
                width={120} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_5000.png"
                alt="Description of the image"
                width={120} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_10000.png"
                alt="Description of the image"
                width={120} // optional width
                height={80} // optional height
                // other optional properties...
              />
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="doll">
          <Card className="p-10 ">
            <div className="flex gap-3">
              <Input
                type="number"
                placeholder="How much money do you have to pay?"
              />
              <Button type="submit">send</Button>
            </div>
            <div className=" gap-2 mt-5 w-full flex">
              <Image
                src="/money_yen/money_1.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_5.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_10.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_100.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_500.png"
                alt="Description of the image"
                width={80} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_1000.png"
                alt="Description of the image"
                width={120} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_5000.png"
                alt="Description of the image"
                width={120} // optional width
                height={80} // optional height
                // other optional properties...
              />
              <Image
                src="/money_yen/money_10000.png"
                alt="Description of the image"
                width={120} // optional width
                height={80} // optional height
                // other optional properties...
              />
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
