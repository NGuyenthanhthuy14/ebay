import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const policies = [
    { name: "Chính sách hoàn trả", href: "/refund-policy" },
    { name: "Điều khoản điều kiện", href: "/terms" },
    { name: "Chính sách hỗ trợ", href: "/support-policy" },
    { name: "Chính sách bảo mật", href: "/privacy-policy" },
  ];

  const categories = [
    { name: "Giày Dép Nam & Nữ", href: "/category/shoes" },
    { name: "Đồng Hồ & Trang Sức", href: "/category/watches" },
    { name: "Thời Trang Nữ", href: "/category/women-fashion" },
    { name: "Túi Da Nam & Nữ", href: "/category/bags" },
    { name: "Đồ Gia Dụng & Phụ Kiện Nhà Bếp", href: "/category/home" },
    { name: "Hành Lý - Va Li", href: "/category/luggage" },
  ];

  return (
    <footer className="bg-[#1f1f1f] text-gray-400 pt-20 pb-10 px-6 md:px-20 relative">
      
		<div className="absolute -top-4 left-6 md:left-20 z-20">
			<div className="relative bg-[#3498db] text-white px-6 py-2 text-xl shadow-lg font-handwriting">
				Liên hệ ngay

				<div className="absolute -top-px -left-2.5 
												w-0 h-4 
												border-t-17 border-t-transparent
												border-r-10 border-r-[#1f5f8a]">
				</div>
			</div>
		</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        <div>
          <h3 className="text-white font-semibold mb-6 text-lg uppercase tracking-wide">
            Liên Hệ
          </h3>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <span className="block text-white font-light mb-1">
                ĐỊA CHỈ
              </span>
              Tầng 19, Tòa nhà Saigon Centre – Tháp 2,
              67 Lê Lợi, Quận 1, TP. Hồ Chí Minh
            </p>

            <p>
              <span className="block text-white font-light mb-1">
                E-MAIL:	
              </span>
              <a
                href="mailto:ebay91760@gmail.com"
                className="hover:text-[#3498db] transition"
              >
                ebay91760@gmail.com
              </a>
            </p>
          </div>

          <div className="flex space-x-3 mt-6">
            <Link
              to="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#3498db]  transition-all duration-300 text-gray-200"
            >
              <FaFacebookF size={14} />
            </Link>

            <Link
              to="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#3498db]  transition-all duration-300 text-gray-200"
            >
              <FaTwitter size={14} />
            </Link>

            <Link
              to="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#3498db] transition-all duration-300 text-gray-200"
            >
              <FaLinkedinIn size={14} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 text-lg uppercase tracking-wide">
            Chính Sách
          </h3>

          <ul className="space-y-3 text-sm font-light">
            {policies.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="hover:text-[#3498db] transition duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 text-lg uppercase tracking-wide">
            Top Danh Mục
          </h3>

          <ul className="space-y-3 text-sm font-light">
            {categories.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="hover:text-[#3498db] transition duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6 text-lg uppercase tracking-wide">
            Tài Khoản
          </h3>

          <ul className="space-y-3 text-sm font-light">
            <li>
              <Link to="/login" className="hover:text-[#3498db] transition">
                Đăng nhập
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-[#3498db] transition">
                Đăng ký
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-6  text-xs text-gray-500">
        © {new Date().getFullYear()} Ebay. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;