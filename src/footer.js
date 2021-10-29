


export let Footer=()=>{
    return(
        <>
        <footer className="footer_container">
          <div className="footer">
              <div className="footergrid">
              <div className="footerlogo"></div>
              <div className="footer_about_info">Semaj Africa is an online education platform that delivers video courses, programs and resources.</div>
              </div>

              <div className="footergrid">
                  <div className="footer_title">Quick Links</div>
                  <ul className="footer_list">
                     <a> <li className="footer_list_item">Home</li></a>
                      <a><li className="footer_list_item">Courses</li></a>
                      <a><li className="footer_list_item">About Us</li></a>
                      <a><li className="footer_list_item">Contact</li></a>
                      <a><li className="footer_list_item">Become A Contributor</li></a>
                  </ul>
              </div>
              
              <div className="footergrid">
                  <div className="footer_title">Contact Us</div>
                  <ul className="footer_list">
                      <a><li className="footer_list_item">(+55) 254. 254. 254</li></a>
                      <a><li className="footer_list_item">Info@lsemajafrica.com</li></a>
                      <a><li className="footer_list_item">Helios Tower 75 Tam Trinh Hoang</li></a>
                      <a><li className="footer_list_item">Mai - Ha Noi - Viet Nam</li></a>
                      
                  </ul>
              </div>

          </div>
          <footer className="footer_end">All Rights Reserved | Wash it!</footer>
          </footer>
          
        </>
    )
    
}