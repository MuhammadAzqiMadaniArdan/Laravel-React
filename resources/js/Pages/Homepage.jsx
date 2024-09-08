import React from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    console.log(props)
    return(
        
        
            <div className='w-full max-w-4xl flex flex-col justify-center items-center'>
                {/* artinya adalah jika didalam props jika ada properti news  maka lakukan mapping (dalam tanda kutip memecah data) pengulanagan dengan pemanggilan data sesuai i (id) dan tampilkan juga data masing masing dari setiap row dan jika tidak ada (tanda dibawah yang ada titik dua) maka tampilkan tulisan berikut */}
                {props.news ? props.news.map ((data, i) => {
                    return(
                        <div key={i} className='p-4 m-2 bg-white text-black shadow-md rounded-md'>
                            <p className='text-2xl'>{data.title}</p>
                            <p className='text-sm'>{data.description}</p>
                            <i>{data.category}</i>
                            <i>{data.author}</i>
                        </div>
                    )
                }) : <p>Saat Ini Belum ada Berita yang Tersedia</p>}
            </div>
        </section>
    )
}
        
    