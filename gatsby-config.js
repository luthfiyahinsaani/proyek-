module.exports = {
  siteMetadata: {
    title: `“Supplier pasir dan batu jabodetabek, aman dan terpercaya siap kirim ke 
    semua wilayah jabodetabek”`,
    description: `“Kenapa beli
    pasir dan batu di sumberpasir?" 1. Gratis ongkos kirim
    Harga lebih murah jika dekat dengan lokasi Kami, di nego aja !
    2. Gratis bongkar muat
    Tidak ada biaya tambahan lainnya, langsung kita bongkar muatan
    3. Bayar ditempat (COD)
    Pembayaran Aman & nyaman bisa langsung di lokasi tujuan.`,
    about: `Sumber pasir adalah Suplier bahan Bangunan yang menyediakan segala jenis pasir dan batu untuk kebutuhan pembagunan rumah dan lain-lain. System pembayaran bisa melalui COD “Barang sampai langsung bayar`,
    contact: `Untuk informasi mengenai Harga Pasir & Harga Batu terbaru. Silahkan Hubungi Kami Dengan Klik Icon WhatsaPP diatas`,
    author: `sumberpasir`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    keyword: `digital marketing, gatsbyjs, seo`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    "gatsby-plugin-mdx",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
