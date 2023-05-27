import Accordion from "../atoms/Accordion"
export default function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can I use React?",
      content: "How are you?"
    },
    {
      id: 2,
      label: "Can I use CSS?",
      content: "I am Good"
    },
    {
      id: 3,
      label: "Can I use JS?",
      content: "I am Bad"
    }
  ]
  return (
    <div className="container mt-3 ml-3">
      <Accordion items={items} />
    </div>
  )
}
