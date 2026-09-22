/**
 * 主页三张卡的图标。
 *
 * 为什么手写而不用 svgrepo 素材：这三个主题需要的是"能一眼看出在讲什么"的示意图
 * （光线反射、三角形成像素、抛物运动），通用图标库里没有对应物。
 * 统一约定：24 格画布、1.5px 描边、圆角端点，颜色继承 currentColor，
 * 由卡片的 --accent 驱动，明暗主题都不用改。
 */

function Icon({className, children}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false">
      {children}
    </svg>
  );
}

/** 光线追踪：一束光打到镜面上，按反射定律折回去 */
export function RayTracingIcon({className}) {
  return (
    <Icon className={className}>
      <path d="M5 4 L11.5 17" />
      <path d="M11.5 17 L18 4" />
      <path d="M3 17 H21" />
    </Icon>
  );
}

/** 光栅化：一个三角形被量化成格子里的像素 */
export function RasterIcon({className}) {
  return (
    <Icon className={className}>
      <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" stroke="none" />
      <rect x="5" y="11.5" width="5" height="5" rx="1" fill="currentColor" stroke="none" />
      <rect x="11.5" y="11.5" width="5" height="5" rx="1" fill="currentColor" stroke="none" />
      <rect x="5" y="18" width="5" height="5" rx="1" fill="currentColor" stroke="none" />
      <rect x="11.5" y="18" width="5" height="5" rx="1" fill="currentColor" stroke="none" />
      <rect x="18" y="18" width="5" height="5" rx="1" fill="currentColor" stroke="none" />
      <rect x="11.5" y="5" width="5" height="5" rx="1" strokeOpacity="0.3" />
      <rect x="18" y="5" width="5" height="5" rx="1" strokeOpacity="0.3" />
      <rect x="18" y="11.5" width="5" height="5" rx="1" strokeOpacity="0.3" />
    </Icon>
  );
}

/** 物理模拟：地面之上的一条抛物线轨迹，物体正处在顶点 */
export function PhysicsIcon({className}) {
  return (
    <Icon className={className}>
      <path d="M4.5 18.5 Q12 3 19.5 18.5" strokeDasharray="2.5 2.5" strokeOpacity="0.55" />
      <circle cx="12" cy="10.75" r="2.6" fill="currentColor" stroke="none" />
      <path d="M3 19.5 H21" />
    </Icon>
  );
}
