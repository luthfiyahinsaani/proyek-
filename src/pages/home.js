import React from "react";
import Layout from "../components/layout";

const HomePage = () => {
    return (
        <Layout>
            <div className="text-slate-900 text-base mt-8 mx-20">
                <h1 className="font-bold text-3xl text-center mb-4">Kenapa beli pasir dan batu di sumberpasir?</h1>
                <p className="text-justify">
                    1. Gratis ongkos kirim<br />
                    Harga lebih murah jika dekat dengan lokasi Kami, di nego aja!<br /><br />
                    2. Gratis bongkar muat<br />
                    Tidak ada biaya tambahan lainnya, langsung kita bongkar muatan<br /><br />
                    3. Bayar ditempat (COD)<br />
                    Pembayaran Aman & nyaman bisa langsung di lokasi tujuan.
                </p>
            </div>
        </Layout>
    );
}

export default HomePage;
