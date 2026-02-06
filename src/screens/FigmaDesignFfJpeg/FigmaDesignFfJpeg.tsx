import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const agentCards = [
  {
    title: "WEB AGENT",
    description: "Context-aware on-site\nassistance.",
    icon: "/image-4.png",
    background: "/background-3.png",
    buttonText: "TRY LIVE CHAT DEMO",
    buttonBg: "bg-[#d5e7f4]",
    buttonBorder: "border-[#dbf1fc]",
    buttonTextColor: "text-[#758795]",
    titleColor: "text-[#586d80]",
    descColor: "text-[#678296]",
    images: [
      {
        src: "/image-15.png",
        className: "right-9 bottom-20 w-[18px] h-[21px]",
      },
      {
        src: "/image-16.png",
        className: "right-[137px] bottom-[150px] w-[29px] h-8",
      },
      {
        src: "/image-17.png",
        className: "right-9 bottom-[130px] w-24 h-[122px]",
      },
      {
        src: "/image-18.png",
        className: "right-[43px] bottom-[239px] w-1 h-0.5",
      },
    ],
    texts: [
      {
        text: "Type k mesaDA",
        className:
          "right-[84px] bottom-[117px] w-[38px] h-[9px] [font-family:'Inter',Helvetica] font-normal text-[#cecfcc] text-[5px]",
      },
      {
        text: "Net Cratho me",
        className:
          "right-[61px] bottom-[149px] w-[49px] h-[15px] [font-family:'Inter',Helvetica] font-light text-[#b2b2b2] text-[7px]",
      },
      {
        text: "Hoip, yoe ay vat porao",
        className:
          "right-[61px] bottom-[209px] w-[49px] h-[9px] [font-family:'Inter',Helvetica] font-light text-[#b6b7b6] text-[4px]",
      },
      {
        text: "Help",
        className:
          "right-[97px] bottom-[236px] w-[15px] h-2.5 [font-family:'Inter',Helvetica] font-normal text-[#90c0e4] text-[6px] text-center",
      },
    ],
    position: "right-[636px]",
  },
  {
    title: "CALLING AGENT",
    description: "Human-like voice Al,\nzero wait.",
    icon: "/image-3.png",
    background: "/background-2.png",
    buttonText: "TEST VOICE DEMO",
    buttonBg: "bg-[#e4e2ef]",
    buttonBorder: "border-[#eeebfa]",
    buttonTextColor: "text-[#83808e]",
    titleColor: "text-[#615b75]",
    descColor: "text-[#7a7490]",
    images: [
      {
        src: "/image-8.png",
        className: "right-[35px] bottom-[81px] w-[152px] h-[173px]",
      },
      {
        src: "/image-9.png",
        className: "right-[45px] bottom-[95px] w-2.5 h-[13px]",
      },
      {
        src: "/image-10.png",
        className: "right-[65px] bottom-[93px] w-3.5 h-[17px]",
      },
      {
        src: "/image-11.png",
        className: "right-[45px] bottom-[140px] w-[58px] h-[15px]",
      },
      {
        src: "/image-12.png",
        className: "right-[45px] bottom-[158px] w-[58px] h-3.5",
      },
      {
        src: "/image-13.png",
        className: "right-[168px] bottom-[185px] w-[3px] h-1.5",
      },
      {
        src: "/image-14.png",
        className: "right-[62px] bottom-52 w-5 h-[23px]",
      },
    ],
    texts: [
      {
        text: "Tedrinoe",
        className:
          "right-[79px] bottom-[172px] w-[23px] h-2 [font-family:'Inter',Helvetica] font-light text-[#bec7d0] text-[5px] text-center",
      },
      {
        text: "Dmncalrere",
        className:
          "right-[58px] bottom-[189px] w-[27px] h-[7px] [font-family:'Inter',Helvetica] font-light text-[#bfbdc9] text-[5px]",
      },
      {
        text: "butice Caton",
        className:
          "right-14 bottom-[196px] w-[31px] h-[9px] [font-family:'Inter',Helvetica] font-normal text-[#97959e] text-[5px]",
      },
      {
        text: "100 123 4000",
        className:
          "right-32 bottom-[207px] w-[43px] h-[11px] [font-family:'Inter',Helvetica] font-normal text-[#9c9c9a] text-[6px]",
      },
    ],
    position: "right-[329px]",
  },
  {
    title: "WHATSAPP AGENT",
    description: "Automate messaging\ninstantly.",
    icon: "/image-2.png",
    background: "/background-1.png",
    buttonText: "SCAN TO TEST ON PHONE",
    buttonBg: "bg-[#d7edeb]",
    buttonBorder: "border-[#ddf6f3]",
    buttonTextColor: "text-[#758a89]",
    titleColor: "text-[#567570]",
    descColor: "text-[#698b85]",
    images: [
      {
        src: "/image-5.png",
        className: "right-[107px] bottom-20 w-[77px] h-[172px]",
      },
      {
        src: "/image-6.png",
        className: "right-[38px] bottom-[102px] w-[83px] h-[98px]",
      },
      {
        src: "/image-7.png",
        className: "right-[165px] bottom-[204px] w-[13px] h-1",
      },
    ],
    texts: [
      {
        text: "Bmewc te joe",
        className:
          "right-[127px] bottom-[191px] w-[29px] h-2 [font-family:'Inter',Helvetica] font-light text-[#a6bb98] text-[4px]",
      },
      {
        text: "Hhesr",
        className:
          "right-[149px] bottom-[235px] w-[19px] h-[7px] [font-family:'Inter',Helvetica] font-light text-[#6caba1] text-[5px] text-center",
      },
    ],
    position: "right-5",
  },
];

const navItems = [
  {
    text: "Afterlife",
    className:
      "right-[236px] bottom-[15px] w-[63px] h-[21px] text-[#666f76] text-base",
  },
  {
    text: "Products",
    className: "right-[139px] bottom-2 w-[83px] h-[39px]",
    isActive: true,
  },
  {
    text: "About",
    className:
      "right-[92px] bottom-[18px] w-[38px] h-[15px] text-[#9197a3] text-[13px] whitespace-nowrap",
  },
  {
    text: "Contact",
    className:
      "right-[21px] bottom-[17px] w-[49px] h-4 text-[#939ea7] text-[13px]",
  },
];

export const FigmaDesignFfJpeg = (): JSX.Element => {
  return (
    <div className="w-full min-w-[1080px] min-h-[700px] flex">
      <div className="flex-1 flex items-end justify-end bg-[#d1dfea]">
        <div className="w-[1052px] h-[700px] mr-[11px] relative">
          <img
            className="absolute right-[31px] bottom-4 w-[1002px] h-[644px] object-cover"
            alt="Background gradient"
            src="/image.png"
          />

          <img
            className="right-3 bottom-[25px] w-[41px] h-[51px] absolute object-cover"
            alt="Decorative element"
            src="/image-1.png"
          />

          <section className="absolute right-[89px] bottom-[65px] w-[882px] h-[481px] bg-[url(/background.png)] bg-cover bg-[50%_50%]">
            {agentCards.map((card, index) => (
              <Card
                key={index}
                className={`absolute ${card.position} bottom-1.5 w-[223px] h-[279px] bg-transparent border-0 shadow-none`}
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="absolute right-1.5 bottom-[7px] w-[209px] h-[265px] object-cover"
                    alt={`${card.title} background`}
                    src={card.background}
                  />

                  <div className="absolute right-[18px] bottom-[22px] w-[187px] h-[42px]">
                    <div
                      className={`absolute right-1 bottom-1 w-[178px] h-[33px] ${card.buttonBg} rounded border border-solid ${card.buttonBorder}`}
                    />
                    <div
                      className={`absolute ${index === 0 ? "right-[38px]" : index === 1 ? "right-[45px]" : "right-[27px]"} bottom-[15px] ${index === 0 ? "w-[110px]" : index === 1 ? "w-[95px]" : "w-[131px]"} h-[15px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal ${card.buttonTextColor} text-[10px] tracking-[0] leading-[normal]`}
                    >
                      {card.buttonText}
                    </div>
                  </div>

                  {card.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      className={`${img.className} absolute object-cover`}
                      alt={`${card.title} detail ${imgIndex + 1}`}
                      src={img.src}
                    />
                  ))}

                  {card.texts.map((textItem, textIndex) => (
                    <div
                      key={textIndex}
                      className={`absolute ${textItem.className} flex items-center justify-center tracking-[0] leading-[normal]`}
                    >
                      {textItem.text}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}

            {agentCards.map((card, index) => (
              <img
                key={`icon-${index}`}
                className={`${index === 0 ? "right-[724px] bottom-[387px] w-[45px] h-[46px]" : index === 1 ? "right-[414px] bottom-[390px] w-[52px] h-[41px]" : "right-[109px] bottom-[381px] w-[33px] h-[57px]"} absolute object-cover`}
                alt={`${card.title} icon`}
                src={card.icon}
              />
            ))}

            {agentCards.map((card, index) => (
              <div
                key={`desc-${index}`}
                className={`absolute ${index === 0 ? "right-[671px] bottom-[299px] w-[149px] h-[42px] leading-[17.7px]" : index === 1 ? "right-[371px] bottom-[299px] w-[135px] h-[43px] leading-[18.2px]" : "right-[54px] bottom-[297px] w-[140px] h-[45px] leading-[21px]"} flex items-center justify-center [font-family:'Inter',Helvetica] font-normal ${card.descColor} text-${index === 0 || index === 1 ? "[13px]" : "sm"} text-center tracking-[0]`}
              >
                {card.description.split("\n").map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < card.description.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
              </div>
            ))}

            {agentCards.map((card, index) => (
              <div
                key={`title-${index}`}
                className={`absolute ${index === 0 ? "right-[703px] bottom-[348px] w-[86px] h-[19px]" : index === 1 ? "right-[381px] bottom-[347px] w-[116px] h-5" : "right-[58px] bottom-[347px] w-[134px] h-5"} flex items-center justify-center [font-family:'Inter',Helvetica] font-bold ${card.titleColor} text-sm tracking-[0] leading-[normal]`}
              >
                {card.title}
              </div>
            ))}
          </section>

          <nav className="absolute right-[357px] bottom-[627px] w-[346px] h-[54px]">
            <div className="absolute right-[5px] bottom-0.5 w-[334px] h-[46px] bg-[#dce4ef] rounded-[18px] border border-solid border-[#e6eef9]" />

            {navItems.map((item, index) =>
              item.isActive ? (
                <div key={index} className={`absolute ${item.className}`}>
                  <div className="absolute right-[3px] bottom-0 w-[76px] h-[34px] bg-[#e5e9f4] rounded-[15px] border border-solid border-[#e2e6f3]" />
                  <div className="absolute right-[3px] bottom-0 w-[77px] h-9 flex items-end justify-end">
                    <div className="flex items-center justify-center mb-[9px] w-[53px] h-4 mr-[11px] [font-family:'Inter',Helvetica] font-normal text-[#898d95] text-xs tracking-[0] leading-[normal]">
                      {item.text}
                    </div>
                  </div>
                </div>
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  className={`absolute ${item.className} flex items-center justify-center [font-family:'Inter',Helvetica] font-normal tracking-[0] leading-[normal] h-auto p-0 hover:bg-transparent`}
                >
                  {item.text}
                </Button>
              ),
            )}

            <img
              className="right-[302px] bottom-3 w-5 h-[25px] absolute object-cover"
              alt="Logo"
              src="/image-19.png"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
