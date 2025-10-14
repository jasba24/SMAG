const logos = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC115fKHBdtj4_PKu5ZpGNfwKBllKvtp1rXVOAwpQYuzM_DovluZ8C2ScBz32YEYo3stomc6kvkM3m-8aPOpBagW-HFKpC3wgytbevFX0eE0ueuGg9yTXiQSvQgqb1MHBllU2N0fH0iYnpJwHMg21sRQjttYx-fvUz7oAjIkLpzXGppcnY8XRZXYMWi2mFToP6_O6PYvLR5T6u7lmTL9HPm6fBzwAaBqsO-Dj_Kewdo1uHtgRuM_EdWgkdLb6iS0QAT2fPqHM46WP9Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCyQHwhz381ECDbgGN447d64SXVnvibPof38SD-hL1ulLjKzH1KoF6ls-Axqr5QphV542V9SbeLwqllQtpNtSxQ3Z6tVneAMr9xn0l6qsi8-u01IEtQ5RZlrrU_ltEqYzGkhSjWpefftdfMrdf3Fez0qEpxbM0N4UchplJrDOx3RsgpE8DRO6xtRJnFwrVQj2LbSXce4fcnaHAzRyGAXLxGSASO8A1sYdt79i7uyxY6Y316PjwYiVARtrADHFcHQ7UEIqJgt9kv4IC6",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCN1kMCcy8MgJLpgQcvaaze52Bl7iZzb9uDW_VCCOZMTgutV3jevl1ORfb63aOCnviI8h8ace5kDbQAyuI01uWJ-0P6uV_9PrfXjm3ImxCTYnfUexdazEdp_sm4P_BwBpj2W4BM0sSK9VBYTaoZrpNELvp1nvjlMD6DLYWY3W2bcZxV8rSNLEXU_71btW3HrjSR8iLnMY441a17CXZs_na6ZfppTzNKDGbqLiizgMie-8Uub5wjhFhBRRplzqQFZ7OVlaA7XahTMIAy",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCC7POBWqCdx7VZb0FlzlqeBieTZc0OiodGw3U5qPYxzBJnMWAxcfpUHOkQK4rqbu7Ctryp6I_Mc8e3sAJmDuJOIQt_NmyLLLP009zWFrK13mTWMPgjqRoRv3AXxV3SxunP47z4O85XUN9YTBBVWby0xrPOQlbwpI0KhUtZjOqENL9HoNIttOUbbC_QG9sDAAm-s_ADJTm0DFjg1ggKBwLRl1c7VnOuM4DrH6cXgFiM5l6HPHH8cgOipmeE7KGjn7OF5n8d98oC3r",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3G5k2F8oGdiOYnKLdmLyL-raoWM2EnVmrRbKDGMPiQ038KV4m_yRby0zbOIoEMKw6QtgzflTqSiC-_QtGpP8GuwWN5nv5-8qdFcUdyh-j0rSCJ9Bz0xzID4P5ucgqdvqAN1BQvRl-qHZ2VU8JQ-YQISguunx1AWlwUj9TrzcVTUowhYbpemb3sFWwhLcThkNhhPBsY4QyWkYLRnRFfKs6APmR7_QP9eGXPBD0fNOJRWhx6XJNvF2_Zhmqv-G0zc53e2NSGeq6jhOL",
]

const TrustedCompanies = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-8">
      <p className="text-slate-400 font-medium">
        Con la confianza de empresas líderes en la industria
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-60">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Logo de empresa cliente"
            className="h-8"
          />
        ))}
      </div>
    </div>
  )
}

export default TrustedCompanies
