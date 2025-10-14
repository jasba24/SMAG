const ContactClients = () => {
  const clients = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDsvVT0qAjx6ulweWqCHwX_ye4TII8QO3xlIl43qU1cEVpZ9k1ns_TSAA0oFyk-Rrs3dJPas5VH6wGc3nOZrQvMWrZpGHhg_8zEEM2-8cP21yYYYawJ0ISB24a_gKxUNjqDm3a6ioDw1TncaXexRbwtXfrHr5RQnac-NcOmODnimBCUS8wXHrfdJqaqY36HXjBBYgH5okkHyfXMW_gu_NaNfPztaFgRvmCGZ9BGvy30shPVqyqp2e8X9gdzmHyuQzvaWWB0MXITultm",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDMOmymEZVFXisqvf12MSIVRe5CqzLBG1PQLfOmSr4Me4wH2D-oDbioJ-ndBMETwg1XYK0RuZ_EoDpiyfoGeTulLpvVcO8lJH8A8Xd8bCCAQR7BZg2-WPuS9dLIo9s7kvFcCCCgP4mAFXm0Pv8nD1ATceA8Y25d7dpFPAKxq1riTlpdBeaWgI3Cw4mnv1AU7ohuIyT2Kl6J47MFm4U8Aw_tYRZdnQwkVrYYcv92dySqgWLuyClUe451w_-NcBUF6rKKaEinPHiVyibe",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1XjLbgSV4AG5jbPHiYbQb6nkKtleUf44gqYBOFOevYd9z-qjG2t__kgtxxENBFAr0wwmYEwrsZ8Thn6PFp1J5UNma1TA3p8bDoj5KJA9MAMBE4cApRTh3romysQXbEhrYMBNsodyyfxFAODk76Ypu4OQ-_H7aUylcyOY1bbttt0CiYv47XwIxtbElyodtYrcKqubhPfx2uoWF9L2PxK8f-FE2HvXyRol7ZmOp2il7y2Ul38iYcLGLHZ1ZIoHJFq25_ARU_p7q06dH",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCPwkGNbzyXhUoZulZXGAFYjTP_A-C7kOdVdTtdncE9IeVbZHVUlZkx2TvN_yY9lxonthEIYUvzejUXBdkhIVuYr5me4o0VduaFIGowYO-z-3UNGh8c_PZ4vckvPA_t6M5MtyCdO-UOuhPlX0KUjpBFodZAFDbv4TDXFz8PKklRY0yVRREKTq1UpNvmiOY2cU-W-Gcn0jBujIWWUDX3uiRn4cHfuOKNEOcq87L1XF5u713BHK-3tamUtZFT8por1R2tDpUqLMn-g88B",
  ]

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold text-center text-text-dark dark:text-white">
        Confían en nosotros
      </h4>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {clients.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Logo Cliente ${i + 1}`}
            className="h-8 sm:h-10 grayscale opacity-60 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>
    </div>
  )
}

export default ContactClients
