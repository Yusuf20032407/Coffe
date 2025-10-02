import { Button, ConfigProvider } from 'antd'

const Revards = () => {
  return (
    <div>
      <div className="star bg-white">
        <p className="montserrent text-[17px]">Starbucks® Rewards</p>
      </div>

      <div className='container mx-auto px-8 pt-[20px] flex justify-between items-center mb-[100px]'>
        <div>
          <h1 className='montserrent text-[50px] text-white font-bold '>It's a great day for <br />free coffee</h1>
          <p className='montserrent text-[19px] text-white pt-[24px] pb-[34px]'>Sign up and start enjoying the perks of Starbucks® Rewards.</p>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#32B765",
                borderRadius: 25,
              },
            }}
          >
            <Button type="primary" className='montserrent'>Join now</Button>
          </ConfigProvider>
          <p className='pt-[16px] text-white montserrent'>It's even better with the app.</p>
        </div>
        <img className='w-[720px] h-[400px]' src={'https://www.starbucks.co.za/sites/starbucks-za-pwa/files/styles/c22_featured_card_531x273/public/2025-09/Starbucks%20Website%20Content%20CardsContent%20Card%201.jpg.webp?itok=cha1Ox9j'} alt="" />
      </div>
    </div>
  )
}

export default Revards
