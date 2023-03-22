import React from "react";
function Header() {
    return (
        <div>
            <header className='header-top-strip py-1'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-10'>
                            <p className='text-white mb-0'>Free Shipping Over $499 & free Returns</p>
                        </div>
                        <div className='col-2'>
                            <p className='text-end text-white mb-0'>
                                Hotline: <a className='text-white' href='tel:+91 9767345322'>+91 9767345322</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

        </div>

    )
}
export default Header;