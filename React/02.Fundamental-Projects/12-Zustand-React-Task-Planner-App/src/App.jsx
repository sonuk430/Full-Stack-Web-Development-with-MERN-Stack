import "animate.css";
import { Badge, Card, Select, Tag } from "antd";
import { Plus } from "lucide-react";

const App = () => {
  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      {/*  Nav Start */}
      <nav className="bg-white h-[60px] fixed top-0 left-0 w-full"></nav>
      {/*  Nav End */}

      <section className="fixed top-[60px] left-0 h-[calc(100%-120px)] w-full overflow-x-auto overflow-y-visible grid grid-cols-3 gap-8 p-8">
        {/*  */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Highest"
            className="!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 !font-medium "
          />
          <div className="bg-white  rounded-lg h-full overflow-auto p-6 space-y-8">
            <button className="focus:shadow-lg items-center hover:scale-105 transition-transform duration-300 text-sm py-1.5 px-3 rounded bg-gradient-to-tr from -blue-600 via-blue-600 to-blue-600 text-white flex gap-1 font-medium">
              <Plus className="w-4 h-4" />
              Add Tasks
            </button>
            <div className="flex flex-col gap-8">
              {Array(10)
                .fill(0)
                .map((item, index) => {
                  return (
                    <Card hoverable>
                      <Card.Meta
                        title="Upload new video on youtube"
                        description="dolores tenetur culpa ut at illo aspernatur et doloribus magni rem voluptas, necessitatibus doloremque quisquam vel fugiat. Voluptate ex molestiae soluta!"
                      />
                      <div className="mt-4">
                        <Tag>Pending</Tag>
                        <Tag className="!bg-rose-500 !border-rose-500 !text-white ">
                          Delate
                        </Tag>

                        <Select size="small">
                          <Option value="pending">Pending</Option>
                        </Select>
                      </div>
                    </Card>
                  );
                })}
            </div>
          </div>
        </div>
        {/*  */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Medium"
            className="!bg-gradient-to-br !from-indigo-500 !via-blue-500 !to-indigo-500 !font-medium "
          />
          <div className="bg-white  rounded-lg h-full overflow-auto"></div>
        </div>
        {/*  */}
        <div className="h-full min-h-0">
          <Badge.Ribbon
            text="Lowest"
            className="!bg-gradient-to-br !from-amber-500 !via-orange-500 !to-amber-500 !font-medium "
          />
          <div className="bg-white  rounded-lg h-full overflow-auto"></div>
        </div>
      </section>
      {/*  Footer Start */}
      <footer className="bg-white h-[60px] fixed bottom-0 left-0 w-full"></footer>
      {/*  Footer End */}
    </div>
  );
};

export default App;
