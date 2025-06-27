import { ChevronDownIcon, ChevronRightIcon, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const Haame = () => {
  // News card data
  const newsCards = [
    {
      image: "https://c.animaapp.com/mce8o5xjetsenD/img/mask-group-2.png",
      title: "Haame Recognized Most Innovative CRM Provider by FXVC",
      description:
        "On October 19, the much-anticipated FXVC brand launch conference opened grandly in Xiamen...",
    },
    {
      image: "https://c.animaapp.com/mce8o5xjetsenD/img/mask-group-3.png",
      title: "Haame Recognized Most Innovative CRM Provider by FXVC",
      description:
        "On October 19, the much-anticipated FXVC brand launch conference opened grandly in Xiamen...",
    },
    {
      image: "https://c.animaapp.com/mce8o5xjetsenD/img/mask-group-4.png",
      title: "Haame Recognized Most Innovative CRM Provider by FXVC",
      description:
        "On October 19, the much-anticipated FXVC brand launch conference opened grandly in Xiamen...",
    },
  ];

  // CRM features data
  const crmFeatures = [
    {
      title: "Adopted by anyone",
      description:
        "Monitor all market activities with real-time data analysis and actionable insights.",
      isActive: true,
    },
    {
      title: "Open & extendable",
      description: "",
      isActive: false,
    },
    {
      title: "Al-driven workflows",
      description: "",
      isActive: false,
    },
    {
      title: "Dashboard anything",
      description: "",
      isActive: false,
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoPopupOpen, setDemoPopupOpen] = useState(false);

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="0:622"
    >
      <div className="bg-white overflow-hidden w-full max-w-[1920px] relative">
        {/* Top notification bar */}
        <div className="absolute w-full h-11 top-0 left-0 bg-[linear-gradient(90deg,rgba(77,238,255,1)_0%,rgba(13,209,252,1)_11%,rgba(1,84,252,1)_27%,rgba(5,8,24,1)_66%)]">
          <div className="absolute h-[26px] top-2 left-1/2 transform -translate-x-1/2 font-normal text-white text-base tracking-[0] leading-[26px] whitespace-nowrap md:block hidden">
            Multi-asset Fintech service platform
          </div>

          <div className="absolute w-[150px] h-[17px] top-[13px] right-[180px] lg:flex hidden">
            <div className="absolute h-[17px] top-0 left-6 font-normal text-white text-sm tracking-[0] leading-[normal]">
              Navy@haame.com
            </div>
            <img
              className="absolute w-4 h-4 top-px left-0"
              alt="Email"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/sms.svg"
            />
          </div>

          <div className="absolute w-[136px] h-[17px] top-[13px] right-5 lg:flex hidden">
            <div className="absolute h-[17px] top-0 left-6 font-normal text-white text-sm tracking-[0] leading-[normal]">
              +852 64445635
            </div>
            <img
              className="absolute w-4 h-4 top-px left-0"
              alt="WhatsApp"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/whatsapp.svg"
            />
          </div>
        </div>

        {/* Header and navigation */}
        <div className="absolute w-full h-[84px] top-11 left-px">
          <div className="absolute w-40 h-10 top-0 left-5 md:left-10 bg-[100%_100%]">
            <div className="relative w-[156px] h-10 left-0.5">
              <img
                className="absolute w-[104px] h-5 top-2.5 left-[52px]"
                alt="Haame"
                src="https://c.animaapp.com/mce8o5xjetsenD/img/group.png"
              />
              <img
                className="absolute w-[37px] h-10 top-0 left-0"
                alt="Logo"
                src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1.png"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <img
              className="absolute w-[642px] h-6 top-[74px] left-1/2 transform -translate-x-1/2"
              alt="Navigation"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/frame-1.svg"
            />

            <img
              className="absolute w-[138px] h-10 top-[66px] right-[220px]"
              alt="Language selector"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/frame-1000008894.svg"
            />

            <Button
              variant="outline"
              className="absolute top-[66px] right-10 h-10 font-semibold text-[#020f2c] border-[#8f9cbd]"
              onClick={() => setDemoPopupOpen(true)}
            >
              Get a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute right-5 top-5">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-16 right-0 w-full bg-white shadow-lg z-50 p-5">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-[#020f2c] font-medium">Home</a>
                <a href="#" className="text-[#020f2c] font-medium">Products</a>
                <a href="#" className="text-[#020f2c] font-medium">Solutions</a>
                <a href="#" className="text-[#020f2c] font-medium">Pricing</a>
                <a href="#" className="text-[#020f2c] font-medium">Resources</a>
                <a href="#" className="text-[#020f2c] font-medium">About Us</a>
                <Button
                  variant="outline"
                  className="w-full mt-4 font-semibold text-[#020f2c] border-[#8f9cbd]"
                  onClick={() => setDemoPopupOpen(true)}
                >
                  Get a Demo
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Hero section */}
        <div className="absolute w-full h-auto top-0 left-0 pt-32 pb-20">
          <img
            className="absolute w-full h-[1104px] top-32 left-0 object-cover"
            alt="Background pattern"
            src="https://c.animaapp.com/mce8o5xjetsenD/img/--.svg"
          />

          <div className="relative z-10 flex flex-col items-center px-4">
            <img
              className="w-full max-w-[507px] h-auto mt-32 md:mt-40"
              alt="Leading CRM for"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/leading-crm-for.svg"
            />

            <img
              className="w-full max-w-[785px] h-auto mt-4"
              alt="Brokerages exchanges"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/brokerages---exchanges.svg"
            />

            <img
              className="w-full max-w-[790px] h-auto mt-8"
              alt="Create your own"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/create-your-own-profit-sharing-system------forex-crm-----pamm---.svg"
            />

            <div className="w-full max-w-[600px] h-auto mt-8 flex justify-center">
              <img
                className="w-full h-auto"
                alt="CTA buttons"
                src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009001.png"
              />
            </div>

            <div className="w-full max-w-[1228px] h-auto mt-16">
              <img
                className="w-full h-auto"
                alt="Dashboard preview"
                src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009000.png"
              />
            </div>
          </div>

          {/* Background elements */}
          <img
            className="absolute w-[1583px] h-[1423px] top-[185px] left-[934px]"
            alt="Background shape"
            src="https://c.animaapp.com/mce8o5xjetsenD/img/ellipse-3.svg"
          />

          <img
            className="absolute w-[1821px] h-[1199px] top-11 left-px"
            alt="Background shape"
            src="https://c.animaapp.com/mce8o5xjetsenD/img/ellipse-4.svg"
          />

          <img
            className="absolute w-[1775px] h-[1132px] top-[111px] left-px"
            alt="Background shape"
            src="https://c.animaapp.com/mce8o5xjetsenD/img/ellipse-6.svg"
          />

          <img
            className="absolute w-[1290px] h-[1154px] top-[89px] left-[630px]"
            alt="Background shape"
            src="https://c.animaapp.com/mce8o5xjetsenD/img/ellipse-7.svg"
          />

          <img
            className="absolute w-[1919px] h-[109px] top-[1134px] left-px"
            alt="Wave pattern"
            src="https://c.animaapp.com/mce8o5xjetsenD/img/----.png"
          />
        </div>

        {/* Partners section */}
        <div className="w-full flex flex-col items-center mt-[1200px] md:mt-[1300px] px-4">
          <div className="font-medium text-[#656b8a] text-xl text-center tracking-[0] leading-8 whitespace-nowrap">
            With Leading Companies
          </div>

          <div className="w-full max-w-[1161px] h-auto mt-10 relative overflow-hidden">
            <div className="relative h-12">
              <div className="absolute w-[1156px] h-12 top-0 left-[5px] flex items-center justify-between">
                <img
                  className="w-[200px] h-12 object-cover"
                  alt="MT4 Logo"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/mt4-logo--.png"
                />

                <img
                  className="w-[200px] h-12 object-cover"
                  alt="MT5 Logo"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/mt5-logo--.png"
                />

                <img
                  className="w-[200px] h-12 object-cover"
                  alt="XHO Logo"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/xho-logo--.png"
                />

                <img
                  className="w-[150px] h-9 object-cover"
                  alt="Fortex Logo"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/fortex-logo--.png"
                />

                <img
                  className="w-[150px] h-9 object-cover"
                  alt="Sirix Logo"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/sirix-logo--.png"
                />
              </div>

              <div className="absolute w-40 h-12 top-0 left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_44%)]" />
              <div className="absolute w-40 h-12 top-0 left-[1001px] rotate-180 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_44%)]" />
            </div>
          </div>
        </div>

        {/* Products section */}
        <div className="w-full flex flex-col items-center mt-32 px-4">
          <h2 className="font-semibold text-[#020f2c] text-4xl md:text-5xl text-center tracking-[0] leading-[normal]">
            Products We Offer
          </h2>

          <p className="mt-6 font-normal text-[#020f2c] text-base md:text-lg text-center tracking-[0] leading-[26px] max-w-[700px]">
            Interface Design · Business Processes · Operational Models — All
            Tailored to You
          </p>

          {/* Product tabs */}
          <Tabs
            defaultValue="crm"
            className="w-full max-w-[413px] h-[59px] mt-10"
          >
            <TabsList className="w-full h-full rounded-2xl border-2 border-solid border-[#00000004] backdrop-blur-[99.5px] bg-transparent">
              <TabsTrigger
                value="crm"
                className="h-[47px] data-[state=active]:bg-white data-[state=active]:text-[#0154fc] data-[state=inactive]:text-[#656b8a] font-medium"
              >
                Crm
              </TabsTrigger>
              <TabsTrigger
                value="pamm"
                className="h-[47px] data-[state=active]:bg-white data-[state=inactive]:text-[#656b8a] font-medium"
              >
                Pamm
              </TabsTrigger>
              <TabsTrigger
                value="copytrading"
                className="h-[47px] data-[state=active]:bg-white data-[state=inactive]:text-[#656b8a] font-medium"
              >
                Copy Trading
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Product details section */}
          <div className="w-full mt-16 flex flex-col lg:flex-row justify-between items-center px-4 md:px-10 gap-10">
            {/* CRM Product details */}
            <div className="w-full max-w-[464px]">
              <div className="font-medium text-[#020f2c] text-xl tracking-[0] leading-7">
                All-in-one CRM solution: Automate mid-backend operations, boost
                customer management efficiency, and drive revenue growth.
              </div>

              {/* CRM Features accordion */}
              <div className="w-full mt-10">
                {crmFeatures.map((feature, index) => (
                  <div key={index} className="mb-[70px]">
                    <div className="flex justify-between items-center">
                      <h3
                        className={`font-semibold text-base ${
                          feature.isActive ? "text-[#0154fc]" : "text-[#020f2c]"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <ChevronDownIcon
                        className={`w-6 h-6 ${
                          feature.isActive ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>

                    {feature.isActive && (
                      <div className="w-full max-w-[462px] h-11 mt-5 font-normal text-[#656b8a] text-sm tracking-[0] leading-[22px]">
                        {feature.description}
                      </div>
                    )}

                    <Separator className="mt-5 w-full max-w-[464px] h-px" />
                  </div>
                ))}
              </div>

              <Button className="px-6 py-4 mt-10 bg-[#020f2c] text-white rounded-[14px] font-semibold">
                Read More
              </Button>
            </div>

            {/* Product screenshot */}
            <div className="w-full max-w-[717px] h-auto aspect-[717/538] mt-10 lg:mt-0 rounded-3xl bg-[linear-gradient(64deg,rgba(77,238,255,1)_0%,rgba(1,84,252,1)_65%,rgba(115,59,255,1)_100%)] relative">
              <div className="absolute w-3 h-3 top-[78px] left-[80px] bg-white rounded-md" />
              <div className="absolute w-3 h-3 top-[78px] left-[104px] bg-white rounded-md" />
              <div className="absolute w-3 h-3 top-[78px] left-[128px] bg-white rounded-md" />

              <img
                className="w-[90%] h-auto mt-[102px] mx-auto"
                alt="CRM Dashboard"
                src="https://c.animaapp.com/mce8o5xjetsenD/img/mask-group.png"
              />
            </div>
          </div>
        </div>

        {/* Why choose us section */}
        <div className="w-full mt-32 flex flex-col items-center px-4">
          <h2 className="font-semibold text-[#020f2c] text-4xl md:text-5xl text-center tracking-[0] leading-[normal]">
            Why choose us
          </h2>

          <p className="mt-6 font-normal text-[#020f2c] text-base md:text-lg text-center tracking-[0] leading-[26px] max-w-[767px]">
            10+ years of fintech &amp; system development expertise.
            Military-grade security. Optimize
            <br />
            operations, cut costs, and build mull asset digital trading futures
            for financial institutions
          </p>
        </div>

        {/* Integrated Systems Architecture section */}
        <div className="w-full mt-32 px-4 flex flex-col items-center">
          <div className="max-w-[1076px] w-full relative">
            <div className="text-center">
              <h2 className="font-semibold text-[#020f2c] text-4xl md:text-5xl tracking-[0] leading-[normal]">
                Integrated Systems Architecture
              </h2>

              <p className="mt-6 font-normal text-[#020f2c] text-base md:text-lg tracking-[0] leading-[26px] max-w-[710px] mx-auto">
                Explore how our technology infrastructure supports your brokerage
                operations with
                <br />
                seamless integrations across platforms.
              </p>

              <Button 
                className="mt-10 bg-[#020f2c] text-white rounded-[14px] px-6 py-4"
                onClick={() => setDemoPopupOpen(true)}
              >
                Get A Demo
              </Button>
            </div>

            {/* Integration diagram - This is complex, we'll make it responsive but simplified */}
            <div className="w-full mt-16 overflow-x-auto">
              <div className="min-w-[1076px] h-[475px] relative">
                {/* Integration nodes and connections */}
                <div className="absolute w-[362px] h-[168px] top-[39px] left-[627px]">
                  <div className="relative w-[389px] h-[195px] top-[-11px] -left-4">
                    <img
                      className="absolute w-[376px] h-[182px] top-1.5 left-2"
                      alt="Connection"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-45-3.svg"
                    />
                    <img
                      className="absolute w-[389px] h-[195px] top-0 left-0"
                      alt="Connection background"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-43.svg"
                    />
                    <img
                      className="absolute w-[258px] h-[90px] top-[41px] left-[79px]"
                      alt="Integration node"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009013.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[362px] h-[168px] top-[39px] left-[73px] rotate-180">
                  <div className="relative w-[389px] h-[195px] -top-4 -left-4">
                    <img
                      className="top-2 -rotate-180 absolute w-[376px] h-[182px] left-2"
                      alt="Connection"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-45-2.svg"
                    />
                    <img
                      className="w-[389px] h-[195px] -rotate-180 absolute top-0 left-0"
                      alt="Connection background"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-43-3.svg"
                    />
                    <img
                      className="absolute w-[258px] h-[90px] top-[63px] left-[79px] -rotate-180"
                      alt="Integration node"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009013-1.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[362px] h-[168px] top-[276px] left-[627px]">
                  <div className="relative w-[389px] h-[195px] -top-4 -left-4">
                    <img
                      className="top-2 absolute w-[376px] h-[182px] left-2"
                      alt="Connection"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-45-1.svg"
                    />
                    <img
                      className="absolute w-[389px] h-[195px] top-0 left-0"
                      alt="Connection background"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-43-5.svg"
                    />
                    <img
                      className="absolute w-[296px] h-[110px] top-11 left-[42px]"
                      alt="Integration node"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009013-2.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[362px] h-[168px] top-[276px] left-[73px] rotate-180">
                  <div className="relative w-[389px] h-[195px] top-[-11px] -left-4">
                    <img
                      className="top-1.5 -rotate-180 absolute w-[376px] h-[182px] left-2"
                      alt="Connection"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-45.svg"
                    />
                    <img
                      className="w-[389px] h-[195px] -rotate-180 absolute top-0 left-0"
                      alt="Connection background"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-43-2.svg"
                    />
                    <img
                      className="absolute w-[296px] h-[110px] top-[41px] left-[42px] -rotate-180"
                      alt="Integration node"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009013-3.png"
                    />
                  </div>
                </div>

                {/* Horizontal connections */}
                <div className="absolute w-[246px] h-1.5 top-[232px] left-[620px]">
                  <div className="relative h-8 top-[-13px]">
                    <img
                      className="absolute w-[200px] h-[7px] top-3 left-[23px]"
                      alt="Connection"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009031.png"
                    />
                    <img
                      className="w-[246px] h-8 absolute top-0 left-0"
                      alt="Connection background"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-43-4.svg"
                    />
                    <img
                      className="absolute w-[246px] h-4 top-2 left-0"
                      alt="Connection highlight"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-48-1.svg"
                    />
                  </div>
                </div>

                <div className="absolute w-[246px] h-1.5 top-[232px] left-[195px] rotate-180">
                  <div className="relative h-8 top-[-13px]">
                    <img
                      className="absolute w-[200px] h-[7px] top-3 left-[23px] -rotate-180"
                      alt="Connection"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/group-1000009031-1.png"
                    />
                    <img
                      className="w-[246px] h-8 -rotate-180 absolute top-0 left-0"
                      alt="Connection background"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-43-1.svg"
                    />
                    <img
                      className="absolute w-[246px] h-4 top-2 left-0 -rotate-180"
                      alt="Connection highlight"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-48.svg"
                    />
                  </div>
                </div>

                {/* Connection points */}
                <img
                  className="absolute w-[19px] h-0.5 top-[239px] left-[642px]"
                  alt="Connection point"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-15.svg"
                />
                <img
                  className="absolute w-0.5 h-[19px] top-[342px] left-[579px]"
                  alt="Connection point"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-16.svg"
                />
                <img
                  className="absolute w-[19px] h-0.5 top-[296px] left-[413px]"
                  alt="Connection point"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/vector-15.svg"
                />

                {/* Central hub */}
                <div className="absolute w-[284px] h-72 top-[102px] left-[395px]">
                  <div className="relative h-72">
                    <div className="absolute w-[264px] h-[264px] top-1.5 left-2.5 rounded-[131.81px] bg-[linear-gradient(284deg,rgba(115,59,255,1)_0%,rgba(1,84,252,0.8)_46%,rgba(77,238,255,1)_100%)]" />

                    <img
                      className="w-[284px] h-72 absolute top-0 left-0"
                      alt="Light circle"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/light-circle-6.png"
                    />

                    <img
                      className="absolute w-[190px] h-[197px] top-[59px] left-[68px]"
                      alt="Central hub icon"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/----1.svg"
                    />
                  </div>
                </div>

                <img
                  className="absolute w-[227px] h-[227px] top-[133px] left-[423px]"
                  alt="Glass liquid swirly sphere"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/glass-liquid-swirly-sphere.png"
                />

                {/* Integration platform icons */}
                <div className="absolute w-[140px] h-[139px] top-0 left-[936px]">
                  <div className="relative h-[139px]">
                    <div className="absolute w-20 h-20 top-[27px] left-[30px] bg-white rounded-[40px] blur-[2px]">
                      <img
                        className="absolute w-[68px] h-[68px] top-2 left-1"
                        alt="Platform icon"
                        src="https://c.animaapp.com/mce8o5xjetsenD/img/mask-group-5.png"
                      />
                    </div>
                    <img
                      className="w-[140px] h-[139px] absolute top-0 left-0"
                      alt="Light circle"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/light-circle-6.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[136px] h-[135px] top-[340px] left-[935px]">
                  <div className="relative h-[135px]">
                    <div className="absolute w-20 h-20 top-[27px] left-7 bg-white rounded-[40px] blur-[2px]">
                      <img
                        className="w-[52px] h-[51px] top-3.5 left-[15px] absolute object-cover"
                        alt="MT5 icon"
                        src="https://c.animaapp.com/mce8o5xjetsenD/img/mt5-icon.png"
                      />
                    </div>
                    <img
                      className="w-[136px] h-[135px] absolute top-0 left-0"
                      alt="Light circle"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/light-circle-6.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[100px] h-[98px] top-[186px] left-[857px]">
                  <div className="relative h-[98px]">
                    <div className="absolute w-20 h-20 top-[9px] left-2.5 bg-white rounded-[40px] blur-[2px]">
                      <img
                        className="absolute w-[70px] h-[70px] top-[5px] left-[5px] object-cover"
                        alt="Sirix"
                        src="https://c.animaapp.com/mce8o5xjetsenD/img/sirix-e1423172697827-1.png"
                      />
                    </div>
                    <img
                      className="absolute w-[100px] h-[98px] top-0 left-0"
                      alt="Light circle"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/light-circle-6.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[100px] h-[98px] top-[361px] left-[21px]">
                  <div className="relative h-[98px]">
                    <div className="absolute w-20 h-20 top-[9px] left-2.5 bg-white rounded-[40px] blur-[2px]">
                      <img
                        className="w-14 h-[43px] top-[18px] left-[11px] absolute object-cover"
                        alt="Fortex"
                        src="https://c.animaapp.com/mce8o5xjetsenD/img/fortex-1.png"
                      />
                    </div>
                    <img
                      className="absolute w-[100px] h-[98px] top-0 left-0"
                      alt="Light circle"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/light-circle-6.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[140px] h-[140px] top-[165px] left-[95px]">
                  <div className="relative h-[140px]">
                    <div className="absolute w-20 h-20 top-[30px] left-[30px] bg-white rounded-[40px] blur-[2px]">
                      <img
                        className="absolute w-12 h-[49px] top-[17px] left-5 object-cover"
                        alt="Leverate"
                        src="https://c.animaapp.com/mce8o5xjetsenD/img/leverate-1.png"
                      />
                    </div>
                    <img
                      className="w-[140px] h-[140px] absolute top-0 left-0"
                      alt="Light circle"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/light-circle-6.png"
                    />
                  </div>
                </div>

                <div className="absolute w-[136px] h-[137px] top-[5px] left-0">
                  <div className="relative h-[137px]">
                    <div className="absolute w-20 h-20 top-7 left-7">
                      <div className="relative w-[154px] h-[216px] top-[-7px] left-[-37px] bg-[url(https://c.animaapp.com/mce8o5xjetsenD/img/group-131.png)] bg-[100%_100%]">
                        <img
                          className="w-[52px] h-[50px] top-[22px] left-[51px] absolute object-cover"
                          alt="MT4 icon"
                          src="https://c.animaapp.com/mce8o5xjetsenD/img/mt4-icon.png"
                        />
                      </div>
                    </div>
                    <img
                      className="w-[136px] h-[137px] absolute top-0 left-0"
                      alt="Light circle"
                      src="https://c.animaapp.com/mce8o5xjetsenD/img/light-circle-6.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News section */}
        <div className="w-full flex flex-col items-center mt-32">
          <div className="w-full max-w-[1315px] px-4 py-20 bg-[url(https://c.animaapp.com/mce8o5xjetsenD/img/ellipse-2112.png)] bg-cover bg-center">
            <div className="text-center mt-20">
              <h2 className="font-semibold text-[#020f2c] text-4xl md:text-5xl tracking-[0] leading-[normal]">
                Latest News
              </h2>

              <p className="mt-6 font-normal text-[#020f2c] text-base md:text-lg tracking-[0] leading-[26px] max-w-[557px] mx-auto">
                Market intelligence, product updates, and engaging with fintech
                communites around the globe, just fellow us
              </p>
            </div>

            {/* News cards */}
            <div className="mt-16 flex flex-col md:flex-row gap-10 justify-center flex-wrap">
              {newsCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full md:w-[392px] h-auto bg-white rounded-3xl shadow-[0px_4px_9px_#b8bedb1a,0px_16px_16px_#b8bedb17,0px_36px_21px_#b8bedb0d,0px_63px_25px_#b8bedb03,0px_99px_28px_transparent]"
                >
                  <CardContent className="p-0">
                    <img
                      className="w-[344px] h-[200px] mt-6 mx-6"
                      alt="News thumbnail"
                      src={card.image}
                    />

                    <div className="px-6">
                      <h3 className="mt-10 mb-6 font-semibold text-[#020f2c] text-xl leading-7 [-webkit-text-stroke:1px_#d9dfeb]">
                        {card.title}
                      </h3>

                      <p className="font-normal text-[#656b8a] text-sm leading-[26px] [-webkit-text-stroke:1px_#d9dfeb]">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter className="px-6 pb-6">
                    <div className="flex items-center text-[#656b8a] text-sm font-medium">
                      Read More
                      <ChevronRightIcon className="ml-2 w-4 h-4" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Ecosystem & Partners section */}
            <div className="text-center mt-32">
              <h2 className="font-semibold text-[#020f2c] text-4xl md:text-5xl tracking-[0] leading-[normal]">
                Our Ecosystem &amp; Partners
              </h2>

              <p className="mt-6 font-normal text-[#020f2c] text-base md:text-lg tracking-[0] leading-[26px] max-w-[767px] mx-auto">
                Pioneering together with leading institutions—see what our partners
                say and explore our ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Partners showcase */}
        <div className="w-full flex justify-center mt-32">
          <div className="w-full max-w-[1272px] h-auto aspect-[1272/760] bg-[url(https://c.animaapp.com/mce8o5xjetsenD/img/mask-group-6.png)] bg-cover bg-center relative overflow-hidden">
            <div className="h-[760px]">
              <div className="relative w-[1272px] h-[760px]">
                <div className="absolute w-[1272px] h-[760px] top-0 left-0">
                  <div className="absolute w-[185px] h-[1272px] top-8 left-[543px] -rotate-90 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_31%,rgba(255,255,255,0)_86%)]" />
                  <div className="absolute w-[131px] h-[760px] top-0 left-[1141px] rotate-180 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_18%,rgba(255,255,255,0)_63%)]" />
                </div>
                <div className="absolute w-[204px] h-[760px] top-0 left-0 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_18%,rgba(255,255,255,0)_63%)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="w-full mt-32 relative">
          <img
            className="w-full h-auto"
            alt="Background"
            src="https://c.animaapp.com/mce8o5xjetsenD/img/mask-group-1.png"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4">
            <div className="max-w-[646px] text-center md:text-left">
              <h2 className="font-semibold text-[#020f2c] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-[normal]">
                Ready To Transform Your Brokerage Operations?
              </h2>

              <p className="mt-6 font-medium text-[#020f2c] text-base md:text-lg tracking-[0] leading-6 max-w-[533px]">
                Our team will present the solution, demonstrate demo-cases,
                provide a commercial offer
              </p>

              {/* Contact form */}
              <div className="w-full max-w-[433px] h-[72px] mt-10">
                <div className="relative w-full h-[72px] rounded-[20px] border border-solid border-[#ffffff80] backdrop-blur-[1px]">
                  <div className="absolute w-[417px] h-14 top-[7px] left-[7px] rounded-2xl shadow-[0px_1px_4px_#0000000d] bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,1)_100%)]">
                    <Input
                      className="absolute h-[19px] top-[26px] left-[19px] font-semibold text-[#8f96bd] text-base border-none bg-transparent"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <Button 
                    className="absolute h-12 top-[11px] left-[285px] bg-[#020f2c] text-white font-semibold rounded-[14px]"
                    onClick={() => setDemoPopupOpen(true)}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <img
              className="absolute w-[462px] h-[407px] top-0 right-0 hidden lg:block"
              alt="Decorative rectangle"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/rectangle-2.png"
            />

            <div className="absolute w-16 h-[55px] bottom-10 right-20 overflow-hidden rotate-[18.21deg] hidden lg:block">
              <img
                className="absolute w-[78px] h-[72px] top-[-9px] left-[-7px] rotate-[-18.21deg]"
                alt="Decorative rectangle"
                src="https://c.animaapp.com/mce8o5xjetsenD/img/rectangle-3.png"
              />
            </div>

            <img
              className="absolute w-[105px] h-[132px] top-[23px] right-[300px] hidden lg:block"
              alt="Decorative rectangle"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/rectangle.png"
            />

            <div className="absolute w-16 h-[98px] bottom-40 right-[400px] overflow-hidden rotate-[20.97deg] blur-[2px] opacity-[0.51] hidden lg:block">
              <img
                className="absolute w-[95px] h-[114px] -top-2 left-[-15px] rotate-[-20.97deg]"
                alt="Decorative rectangle"
                src="https://c.animaapp.com/mce8o5xjetsenD/img/rectangle-4.png"
              />
            </div>

            <img
              className="absolute w-[54px] h-[82px] top-[245px] right-10 hidden lg:block"
              alt="Decorative rectangle"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/rectangle-1.png"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="w-full pt-32 px-4">
          <div className="max-w-[1111px] mx-auto relative">
            <img
              className="w-28 h-7 object-cover"
              alt="Logo"
              src="https://c.animaapp.com/mce8o5xjetsenD/img/---13-1.png"
            />

            <div className="flex flex-col max-w-xs w-80 mt-10">
              <p className="font-normal text-[#656b8a] text-sm tracking-[0] leading-6">
                As a financial technology company headquartered in Hong
                Kong, Haame is committed to providing reliable and
                continuous CRM operation management system services to
                brokerages and exchanges around the world.
              </p>
            </div>

            {/* Footer columns */}
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-10">
              {/* Solutions column */}
              <div>
                <h4 className="font-bold text-preview-profitmax-opsyslovableappebony text-sm leading-5 mb-4">
                  Solutions
                </h4>
                <ul className="space-y-4 text-[#656b8a] text-sm">
                  <li>Brokerages</li>
                  <li>Exchange</li>
                  <li>Asset Management</li>
                </ul>
              </div>

              {/* Products column */}
              <div>
                <h4 className="font-bold text-preview-profitmax-opsyslovableappebony text-sm leading-5 mb-4">
                  Products
                </h4>
                <ul className="space-y-4 text-[#656b8a] text-sm">
                  <li>CRM</li>
                  <li>PAMM</li>
                  <li>CopyTrading</li>
                </ul>
              </div>

              {/* Links column */}
              <div>
                <h4 className="font-bold text-preview-profitmax-opsyslovableappebony text-sm leading-5 mb-4">
                  Links
                </h4>
                <ul className="space-y-4 text-[#656b8a] text-sm">
                  <li>Insights</li>
                  <li>Event</li>
                  <li>About</li>
                </ul>
              </div>
            </div>

            {/* Copyright and social links */}
            <div className="w-full mt-16 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
              <div className="font-normal text-preview-profitmax-opsyslovableappslate-gray text-xs tracking-[0] leading-5">
                Copyright © HAAME TECH LIMITED 2024. All Rights Reserved
              </div>

              <div className="w-[153px] h-5 mt-4 md:mt-0 flex space-x-4">
                <img
                  className="w-5 h-5"
                  alt="Social icon"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/component-2.svg"
                />
                <img
                  className="w-[21px] h-5"
                  alt="Social icon"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/component-2-3.svg"
                />
                <img
                  className="w-5 h-5"
                  alt="Social icon"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/component-2-2.svg"
                />
                <img
                  className="w-5 h-5"
                  alt="Social icon"
                  src="https://c.animaapp.com/mce8o5xjetsenD/img/component-2-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Demo Popup */}
        {demoPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4"
                onClick={() => setDemoPopupOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <h2 className="text-2xl font-semibold text-[#020f2c] mb-6">Get a Demo</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#656b8a] mb-1">Full Name</label>
                  <Input 
                    className="w-full border border-[#d9dfeb] rounded-lg" 
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#656b8a] mb-1">Email</label>
                  <Input 
                    className="w-full border border-[#d9dfeb] rounded-lg" 
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#656b8a] mb-1">Company</label>
                  <Input 
                    className="w-full border border-[#d9dfeb] rounded-lg" 
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#656b8a] mb-1">Phone Number</label>
                  <Input 
                    className="w-full border border-[#d9dfeb] rounded-lg" 
                    placeholder="Enter your phone number"
                    type="tel"
                  />
                </div>
                
                <Button className="w-full bg-[#0154fc] hover:bg-[#0143d1] text-white font-semibold py-3 rounded-lg mt-4">
                  Request Demo
                </Button>
                
                <p className="text-xs text-[#656b8a] text-center mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-[#0154fc]">Terms of Service</a> and <a href="#" className="text-[#0154fc]">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
