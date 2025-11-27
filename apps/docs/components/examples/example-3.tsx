import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Example3Component } from "./example-3-component";
import { CodeHighlight } from "../code-highlight";

export function Example3() {
  return (
    <div className="mt-2">
      <Tabs defaultValue="year-month">
        <TabsList>
          <TabsTrigger value="year-month">year-month</TabsTrigger>
          <TabsTrigger value="year">year</TabsTrigger>
          <TabsTrigger value="month">month</TabsTrigger>
        </TabsList>
        <TabsContent value="year-month">
          <div className="p-2 h-96 rounded-t-md border-x border-t flex items-center justify-center">
            <Example3Component mode="year-month" />
          </div>
          <CodeHighlight
            code={`<YmPicker mode="year-month" />`}
            className={"border-b rounded-b-md"}
          />
        </TabsContent>
        <TabsContent value="year">
          <div className="p-2 h-96 rounded-t-md border-x border-t flex items-center justify-center">
            <Example3Component mode="year" />
          </div>
          <CodeHighlight
            code={`<YmPicker mode="year" />`}
            className={"border-b rounded-b-md"}
          />
        </TabsContent>
        <TabsContent value="month">
          <div className="p-2 h-96 rounded-t-md border-x border-t flex items-center justify-center">
            <Example3Component mode="month" />
          </div>
          <CodeHighlight
            code={`<YmPicker mode="month" />`}
            className={"border-b rounded-b-md"}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
