export const BASE_URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://roshanandroiddevelper.netlify.app";

export const CV_URL = `${BASE_URL}/Roshan Resume.pdf`;
export const REACT_NATIVE_CV_URL = `${BASE_URL}/Roshan React-Native.pdf`;

type Project = {
  title: string;
  subTitle: string;
  description: string;
  screenshots: string[];
  apkUrl?: string;
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Asynchronous Reverse Proxy",
    subTitle: "Java NIO, Reactor Pattern",
    description: "A non-blocking Layer-7 reverse proxy and load balancer built with Java NIO Selectors, bounded ByteBuffer pools, dynamic backpressure, token-bucket rate limiting, and round-robin plus least-connections routing. Benchmarked at 10,000+ QPS across 1,000 concurrent connections with sub-5ms average latency overhead.",
    screenshots: []
  },
  {
    title: "Embedded LSM-Tree Storage Engine",
    subTitle: "Java, WAL, SSTables",
    description: "An embedded key-value engine modeled after RocksDB with a ConcurrentSkipListMap MemTable, crash-safe Write-Ahead Log using FileChannel.force(), sorted SSTables, sparse indexes, Bloom Filters, and background size-tiered compaction verified through JUnit crash-simulation tests.",
    screenshots: []
  },
  {
    title: "Kirana Ledger",
    subTitle: "React Native, SQLite, Node.js",
    description: "An offline-first inventory, billing, and udhaar app for small kirana shops. It stores stock and customer balances as append-only ledger entries, then syncs queued changes safely to a Node.js and PostgreSQL backend in batches with capped retries.",
    screenshots: []
  },
  {
    title: "CryptNote",
    subTitle: "Encrypted Vault, pgvector",
    description: "A private React Native knowledge vault for notes, ideas, credential details, and code snippets. Notes are encrypted on-device with AES-256-GCM before reaching the backend, with semantic search powered by embeddings stored in PostgreSQL using pgvector.",
    screenshots: []
  },
  {
    title: "Civic Incident Geospatial Backend",
    subTitle: "Flask, PostgreSQL, PostGIS",
    description: "A REST backend for localized incident reporting with dynamic radius queries, duplicate report reduction, GiST spatial indexes, OpenStreetMap-ready endpoints, and PostGIS lookup times under 100ms on large test datasets.",
    screenshots: []
  },
  {
    title: "Personal Finance Advisor",
    subTitle: "React Native, Offline Storage",
    description: "A hackathon-finalist expense tracker that uses Android background listeners to convert bank and UPI notifications into transactions. Financial data stays on-device, works offline, and is categorized with budgeting tips based on the month balance.",
    screenshots: [
      "/Finance_Screen.jpg",
      "/Finance_Screen1.jpg",
      "/Finance_Screen5.jpg",
      "/Finance_Screen4.jpg",
      "/Finance_Screen6.png"
    ]
  },
  {
    title: "Global Water-Logging Detector",
    subTitle: "Android, AI, GPS Reports",
    description: "An Android solution for detecting water-logged areas from images and generating GPS-tagged reports that can support faster civic response workflows.",
    screenshots: [
      "/Dtector  image uploading for AI procesing.png",
      "/camera screen.png",
      "/water detector report ai resposne.png",
      "/location the water logged area detected form the image.png"
    ]
  }
];
