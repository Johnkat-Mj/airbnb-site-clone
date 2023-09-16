import { Container } from 'components/atoms/Container'
import { LucideDollarSign, LucideGlobe } from 'lucide-react'
import { Modal } from 'components/molecules/modal/Modal'


const footerItems = [
  {
    id:1,
    title:"Support",
    items:[
      {
        id:1,
        text:"Help Centre"
      },
      {
        id:2,
        text:"AirCover"
      },
      {
        id:3,
        text:"Anti-discrimination"
      },
      {
        id:4,
        text:"Disability support"
      },
      {
        id:5,
        text:"Cancellation options"
      },
    ]
  },
  {
    id:2,
    title:"Hosting",
    items:[
      {
        id:1,
        text:"Help Centre"
      },
      {
        id:2,
        text:"AirCover"
      },
      {
        id:3,
        text:"Anti-discrimination"
      },
      {
        id:4,
        text:"Disability support"
      },
      {
        id:5,
        text:"Cancellation options"
      },
    ]
  },
  {
    id:3,
    title:"Airbnb",
    items:[
      {
        id:1,
        text:"Help Centre"
      },
      {
        id:2,
        text:"AirCover"
      },
      {
        id:3,
        text:"Anti-discrimination"
      },
      {
        id:4,
        text:"Disability support"
      },
      {
        id:5,
        text:"Cancellation options"
      },
    ]
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4">
      <Container className="space-y-10">
        <div className="grid sm:grid-cols-3 gap-5 sm:gap-8 md:gap-10 py-24">
          {
            footerItems.map(footerItem=>(
              <div key={footerItem.id} className='flex flex-col space-y-4'>
                <h2 className="font-medium text-gray-800">
                  {footerItem.title}
                </h2>
                <ul className="space-y-3 text-gray-500">
                  {
                    footerItem.items.map(item=>(
                      <li key={item.id} className=''>
                        {item.text}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <div className="flex justify-between text-gray-600 relative border-t border-t-gray-200 pt-4">
          <div className="flex items-center gap-3">
            <p>
              © 2023 Airbnb, Inc.
            </p>
            <ul className='flex items-center gap-3'>
              <li className="relative before:absolute before:w-0.5 before:h-0.5 before:bg-gray-400 before:left-0 before:top-1/2 before:-translate-y-1/2 pl-1.5">
                <span>Privacity</span>
              </li>
              <li className="relative before:absolute before:w-0.5 before:h-0.5 before:bg-gray-400 before:left-0 before:top-1/2 before:-translate-y-1/2 pl-1.5">
                <span>Terms</span>
              </li>
              <li className="relative before:absolute before:w-0.5 before:h-0.5 before:bg-gray-400 before:left-0 before:top-1/2 before:-translate-y-1/2 pl-1.5">
                <span>Sitemaps</span>
              </li>
              <li className="relative before:absolute before:w-0.5 before:h-0.5 before:bg-gray-400 before:left-0 before:top-1/2 before:-translate-y-1/2 pl-1.5">
                <span>Destinations</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5 font-medium">

            <Modal>
              <Modal.Trigger>
                <div className='flex items-center gap-2'>
                  <LucideGlobe size={15} />
                  English-us
                </div>
              </Modal.Trigger>
              <Modal.Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium amet hic atque, nisi officiis excepturi sapiente dolorum cumque, reiciendis vero nihil neque qui soluta consequatur, at libero ad sit.
              </Modal.Content>
            </Modal>
            <Modal>
              <Modal.Trigger>
                <div className='flex items-center gap-2'>
                  <LucideDollarSign size={15} />
                  USD
                </div>
              </Modal.Trigger>
              <Modal.Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium amet hic atque, nisi officiis excepturi sapiente dolorum cumque, reiciendis vero nihil neque qui soluta consequatur, at libero ad sit.
              </Modal.Content>
            </Modal>
          </div>
        </div>
      </Container>
    </footer>
  )
}
