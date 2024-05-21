import React from "react";
import Layout from "../components/layout";

const ProductPage = () => {
    // Array yang berisi URL gambar
    const imageUrlsPart1 = [
        "https://i.ibb.co.com/xzJKg2H/sumberpasir-batu.png",
        "https://i.ibb.co.com/MDpZZpx/batu1.png",
        "https://i.ibb.co.com/CtspJgQ/batu2.png",
        "https://i.ibb.co.com/bPdqbJ2/batu3.png",
        "https://i.ibb.co.com/b6bSmKY/batu4.png",
        "https://i.ibb.co.com/CVbNp0r/batu5.png",
    ];

    const imageUrlsPart2 = [
        "https://i.ibb.co.com/6XpThQK/sumberpasir-pasir.png",
        "https://i.ibb.co.com/KmR4xSS/pasir1.png",
        "https://i.ibb.co.com/rytwmfh/pasir2.png",
        "https://i.ibb.co.com/QYBkwpy/pasir3.png",
        "https://i.ibb.co.com/xHvy12t/pasir4.png",
    ];

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center text-slate-900 text-base mt-8">
                <h1 className="font-bold text-2xl mb-4">PRODUK - PRODUK KAMI BATU</h1>
                <div className="mb-8 flex flex-wrap justify-center">
                    {imageUrlsPart1.map((imageUrl, index) => (
                        <div key={index} className="mr-4 mb-4">
                            <img
                                src={imageUrl}
                                alt={`Produk ${index + 1}`}
                                style={{ height: "200px", width: "200px" }}
                            />
                        </div>
                    ))}
                </div>

                <h1 className="font-bold text-2xl mb-4">PRODUK - PRODUK KAMI PASIR</h1>
                <div className="mb-8 flex flex-wrap justify-center">
                    {imageUrlsPart2.map((imageUrl, index) => (
                        <div key={index} className="mr-4 mb-4">
                            <img
                                src={imageUrl}
                                alt={`Produk ${index + 7}`} // Index offset to differentiate from first set
                                style={{ height: "200px", width: "200px" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export default ProductPage;
