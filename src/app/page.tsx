const modules = [
  {
    name: "Tài chính & Kế toán",
    description:
      "Báo cáo tức thời, tự động đối soát ngân hàng và cảnh báo dòng tiền để ban lãnh đạo ra quyết định nhanh hơn.",
    badge: "Realtime",
    items: ["Sổ cái hợp nhất", "Quản lý chi phí dự án", "Kết nối e-invoice"],
  },
  {
    name: "Nhân sự & Chấm công",
    description:
      "Quy trình tuyển dụng, onboard, chấm công và tính lương khép kín với đầy đủ kịch bản ca kíp, tăng ca và phúc lợi.",
    badge: "Workforce",
    items: ["Cổng nhân viên", "Chấm công GPS/FaceID", "Tính lương nhiều bảng"],
  },
  {
    name: "Bán hàng đa kênh",
    description:
      "Đồng bộ đơn từ website, cửa hàng, sàn TMĐT; kiểm soát công nợ, chính sách giá và chiết khấu theo từng phân khúc.",
    badge: "Revenue",
    items: ["Quản lý pipeline", "CPQ & báo giá", "Công nợ & hạn mức"],
  },
  {
    name: "Kho vận & Sản xuất",
    description:
      "Quản lý tồn kho theo lô/serial, định mức BOM, lịch sản xuất và kết nối nhà vận chuyển theo thời gian thực.",
    badge: "Operations",
    items: ["WMS nâng cao", "MRP & kế hoạch", "Track & Trace"],
  },
  {
    name: "Mua hàng & Chuỗi cung ứng",
    description:
      "Tự động hóa quy trình mua hàng, đánh giá nhà cung cấp và theo dõi KPI SLA giao nhận theo từng hợp đồng.",
    badge: "Procurement",
    items: ["Yêu cầu mua hàng", "Hợp đồng & duyệt", "Thanh toán milestone"],
  },
  {
    name: "Phân tích điều hành",
    description:
      "Bảng điều khiển (dashboard) dạng realtime, cảnh báo bất thường và dự báo nhu cầu dựa trên dữ liệu lịch sử.",
    badge: "Insight",
    items: ["KPI đa chiều", "Cảnh báo rủi ro", "Dự báo nhu cầu"],
  },
];

const workflows = [
  {
    title: "Chuẩn hóa quy trình",
    detail:
      "Từ yêu cầu mua hàng, duyệt ngân sách tới ký hợp đồng điện tử; mọi bước đều có SLA, người phụ trách và log hành động rõ ràng.",
  },
  {
    title: "Vận hành tự động",
    detail:
      "Đơn bán được đẩy sang kho, sinh phiếu xuất, hóa đơn điện tử và cập nhật công nợ ngay khi giao nhận hoàn tất.",
  },
  {
    title: "Quyết định dựa trên dữ liệu",
    detail:
      "Đo lường biên lợi nhuận theo sản phẩm/kênh, cảnh báo vượt ngân sách, dự báo tồn kho và nhu cầu sản xuất.",
  },
];

const highlights = [
  { label: "Triển khai", value: "6-8 tuần", note: "Mẫu quy trình chuẩn, tùy biến theo ngành" },
  { label: "Người dùng", value: "10 - 2.000+", note: "Phân quyền chi tiết theo vai trò" },
  { label: "Khả năng mở rộng", value: "API mở", note: "Kết nối CRM, POS, DMS, PowerBI" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.1),transparent_30%),radial-gradient(circle_at_40%_80%,rgba(236,72,153,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900/60 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <header className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-lg shadow-cyan-500/5 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-lg font-semibold text-slate-950">
              ERP
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Orchid ERP</p>
              <p className="text-base text-slate-100">Nền tảng vận hành hợp nhất cho doanh nghiệp Việt</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-200">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-200 ring-1 ring-green-400/40">
              ● Hoạt động 99.9%
            </span>
            <span className="hidden rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-100 ring-1 ring-white/10 sm:inline-flex">
              ISO 27001 | SOC 2 ready
            </span>
          </div>
        </header>

        <main className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-start">
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950 px-8 py-10 shadow-xl shadow-cyan-500/10 backdrop-blur">
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-12 right-3 h-28 w-28 rounded-full bg-indigo-500/15 blur-3xl" />

            <div className="relative flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
              <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">ERP thế hệ mới</span>
              <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-cyan-100 ring-1 ring-cyan-300/40">Cloud-native</span>
              <span className="rounded-full bg-indigo-400/15 px-3 py-1 text-indigo-100 ring-1 ring-indigo-300/40">Việt hóa 100%</span>
            </div>

            <div className="relative mt-6 flex flex-col gap-6">
              <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl">
                Vận hành tinh gọn, kết nối mọi phòng ban trên cùng một nền tảng ERP.
              </h1>
              <p className="text-lg leading-7 text-slate-200/90 sm:text-xl">
                Từ tài chính, nhân sự, bán hàng tới kho vận và sản xuất. Orchid ERP giúp doanh nghiệp kiểm soát dòng tiền, hàng hóa và năng lực nhân sự theo thời gian thực.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-[1.01] hover:shadow-cyan-400/40"
                  href="#demo"
                >
                  Đặt lịch demo
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-100"
                  href="#modules"
                >
                  Xem module vận hành →
                </a>
              </div>
            </div>

            <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 shadow-inner shadow-black/20"
                >
                  <p className="text-sm text-slate-200">{item.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{item.value}</p>
                  <p className="text-sm text-slate-300/80">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 px-7 py-8 shadow-xl shadow-indigo-500/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-100">Kho dữ liệu hợp nhất</p>
                <h2 className="text-2xl font-semibold text-white">Điều hành theo chỉ số</h2>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/40">
                Live
              </span>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/5 bg-slate-900/60 p-4">
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span>Doanh thu tháng</span>
                <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-xs font-semibold text-emerald-200">+18% MoM</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span>Chi phí vận hành</span>
                <span className="text-amber-200">-12% YoY</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-amber-300 to-orange-400" />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-200">
                <span>Vòng quay tồn kho</span>
                <span className="text-cyan-100">5.2 lần/năm</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
              </div>
            </div>
            <ul className="grid gap-3 text-sm text-slate-100">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                Dòng tiền, tồn kho, lợi nhuận và nhân sự đều đo lường theo thời gian thực.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Bộ thư viện báo cáo mẫu: P&L, cashflow, AR/AP aging, năng suất ca kíp.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                Cảnh báo vượt ngân sách, cảnh báo tồn kho an toàn và SLA giao hàng.
              </li>
            </ul>
          </section>
        </main>

        <section id="modules" className="mt-12 grid gap-6 lg:mt-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Module vận hành</p>
              <h2 className="text-3xl font-semibold text-white">Triển khai theo từng giai đoạn, kết nối liền mạch</h2>
              <p className="max-w-3xl text-base text-slate-200">
                Chọn module cần thiết cho hiện tại, bổ sung khi doanh nghiệp mở rộng. Mọi dữ liệu đều nằm trên một nền tảng duy nhất.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/50 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/10"
              href="#demo"
            >
              Nhận lộ trình triển khai →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <div
                key={module.name}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-cyan-400/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{module.name}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-300/40">
                    {module.badge}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-200">{module.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-100">
                  {module.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900/70 px-3 py-2 ring-1 ring-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/80 px-8 py-10 shadow-xl shadow-cyan-500/10 backdrop-blur lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Quy trình mẫu</p>
            <h2 className="text-3xl font-semibold text-white">Vận hành liên phòng ban, minh bạch từng bước</h2>
            <p className="text-base text-slate-200">
              Orchid ERP đi kèm bộ playbook quy trình chuẩn, giúp doanh nghiệp triển khai nhanh mà vẫn đảm bảo kiểm soát và tuân thủ.
            </p>
            <div className="grid gap-3 text-sm text-slate-100">
              {workflows.map((flow, index) => (
                <div
                  key={flow.title}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5"
                >
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-300/40">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{flow.title}</p>
                    <p className="text-slate-200/90">{flow.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-inner shadow-black/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-100">Lợi ích đo được</p>
                <h3 className="text-2xl font-semibold text-white">Kết quả sau 3-6 tháng</h3>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/40">
                Benchmark
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-slate-50">
                <p className="text-sm">Tiết kiệm chi phí</p>
                <p className="text-3xl font-semibold">-15% đến -25%</p>
                <p className="text-xs text-emerald-100">Tối ưu quy trình, giảm lỗi nhập liệu</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-3 text-slate-50">
                <p className="text-sm">Tăng trưởng</p>
                <p className="text-3xl font-semibold">+12% doanh thu</p>
                <p className="text-xs text-cyan-100">Quy trình bán hàng liền mạch, giảm thất thoát</p>
              </div>
              <div className="rounded-2xl border border-indigo-300/30 bg-indigo-400/10 px-4 py-3 text-slate-50">
                <p className="text-sm">Kiểm soát</p>
                <p className="text-3xl font-semibold">100% audit trail</p>
                <p className="text-xs text-indigo-100">Phân quyền theo vai trò, phê duyệt đa cấp</p>
              </div>
              <div className="rounded-2xl border border-amber-300/40 bg-amber-400/10 px-4 py-3 text-slate-50">
                <p className="text-sm">Sự hài lòng</p>
                <p className="text-3xl font-semibold">4.7/5</p>
                <p className="text-xs text-amber-100">Nhân viên & khách hàng truy cập trên mọi thiết bị</p>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="mt-14 grid gap-6 rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-xl shadow-indigo-500/10 backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-100">Bắt đầu</p>
            <h2 className="text-3xl font-semibold text-white">Nhận tư vấn và demo phù hợp ngành của bạn</h2>
            <p className="text-base text-slate-200">
              Đội ngũ triển khai của Orchid ERP đã đồng hành với doanh nghiệp trong các lĩnh vực sản xuất, bán lẻ, thương mại phân phối và dịch vụ. Chúng tôi giúp bạn xác định lộ trình, chuẩn hóa dữ liệu và đào tạo người dùng.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-100">
              <span className="rounded-full bg-cyan-400/10 px-4 py-2 ring-1 ring-cyan-300/40">Workshop khảo sát hiện trạng</span>
              <span className="rounded-full bg-indigo-400/10 px-4 py-2 ring-1 ring-indigo-300/40">Demo theo quy trình của bạn</span>
              <span className="rounded-full bg-emerald-400/10 px-4 py-2 ring-1 ring-emerald-300/40">Kế hoạch triển khai 6-8 tuần</span>
              <span className="rounded-full bg-amber-400/10 px-4 py-2 ring-1 ring-amber-300/40">Đào tạo & chuyển giao</span>
            </div>
          </div>

          <form className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-inner shadow-black/30">
            <div className="grid gap-2">
              <label className="text-sm text-slate-200" htmlFor="name">
                Họ và tên
              </label>
              <input
                id="name"
                type="text"
                placeholder="VD: Nguyễn Minh Quân"
                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-slate-200" htmlFor="email">
                Email công ty
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-slate-200" htmlFor="industry">
                Ngành nghề
              </label>
              <select
                id="industry"
                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white focus:border-cyan-300/60 focus:outline-none"
              >
                <option>Sản xuất</option>
                <option>Phân phối & bán lẻ</option>
                <option>Dịch vụ</option>
                <option>Khác</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-slate-200" htmlFor="size">
                Quy mô nhân sự
              </label>
              <input
                id="size"
                type="text"
                placeholder="VD: 200 nhân sự, 3 chi nhánh"
                className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/60 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-[1.01] hover:shadow-cyan-400/40"
            >
              Gửi yêu cầu demo
            </button>
            <p className="text-xs text-slate-400">
              Bấm gửi tức là bạn đồng ý với Điều khoản sử dụng và Chính sách bảo mật của Orchid ERP.
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
