export const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://roshanandroiddevelper.netlify.app";

export const CV_URL = `${BASE_URL}/Roshan Resume.pdf`;

export const PROJECTS = [
  {
    title: "Global Water-Logging Detector",
    subTitle: "AI & GPS Monitoring",
    description: "A sophisticated Android solution leveraging Computer Vision to identify water-logged areas. It generates real-time, GPS-tagged reports to assist municipal authorities in rapid flood response.",
    screenshots: [
      "/Dtector  image uploading for AI procesing.png",
      "/camera screen.png",
      "/water detector report ai resposne.png",
      "/location the water logged area detected form the image.png"
    ],
    apkUrl: `${BASE_URL}/apks/detector.apk`
  },
  {
    title: "Live Stream Pro",
    subTitle: "Kotlin & Jetpack Compose",
    description: "A high-performance streaming platform offering seamless live TV playback. Features a modern intuitive interface, optimized buffering, and robust channel management.",
    screenshots: [
      "/Live tv channels.png",
      "/live tv channel list.png",
      "/live tv video playing preview.png",
      "/LiveTV FullScreen.png"
    ],
    apkUrl: `${BASE_URL}/apks/livetv.apk`
  },
  {
    title: "Finance Advisor",
    subTitle: "Hackathon Champion",
    description: "An intuitive financial management app developed for small business owners. It simplifies bookkeeping with digital ledger tracking for online and cash transactions.",
    screenshots: [
      "/Finance_Screen.jpg",
      "/Finance_Screen1.jpg",
      "/Finance_Screen5.jpg",
      "/Finance_Screen4.jpg",
      "/Finance_Screen6.png"
    ],
    apkUrl: `${BASE_URL}/apks/FinanceAdvisor.apk`
  },
  {
    title: "Velvet View",
    subTitle: "Generative AI",
    description: "An innovative mobile gallery powered by DALL-E and Midjourney integration. Velvet View allows users to generate and apply high-resolution AI wallpapers instantly.",
    screenshots: [
      "/Velvet_Screen1.png",
      "/Velvet_Screen2.png",
      "/Velvet_Screen3.png",
      "/Velvet_Screen4.png",
      "/Velvet_Screen5.png",
      "/Velvet_Screen6.png"
    ],
    apkUrl: `${BASE_URL}/apks/VelvetView.apk`
  }
];
