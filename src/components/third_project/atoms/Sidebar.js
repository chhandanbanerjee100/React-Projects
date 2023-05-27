import Link from "./Link";

function Sidebar(){
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderedLinks = links.map((link)=>{
    return <Link key={link.label}
                to={link.path}
                className="mb-3"
                linkText={link.label}
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                />
  });

  return(
    <div className="flex flex-col overflow-y-scroll sticky top-0 items-start" >
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
