# Lumina Spa

Lumina Spa 是一个包含顾客前台与管理员后台的多页面水疗网站项目。

## 技术架构

```text
React Frontend
      |
      | REST API / JSON
      v
Node.js + Express Backend
      |
      | ORM / SQL
      v
MySQL Database
```

### 前端

- React
- Vite
- React Router
- Axios

### 后端

- Node.js
- Express
- JWT 身份认证
- bcrypt 密码加密

### 数据库

- MySQL
- Prisma ORM

## 品牌颜色

Lumina Spa 使用自然、温暖、安静的森林系配色。

| 颜色名称 | Hex | CSS 变量 | 建议用途 |
| --- | --- | --- | --- |
| Lumina Forest | `#1F4A37` | `--color-forest` | 品牌主色、导航栏、标题、主要按钮 |
| Warm Ivory | `#FAF8F5` | `--color-ivory` | 页面主背景、浅色文字区域 |
| Soft Cream | `#F3EFE7` | `--color-cream` | 分区背景、表单背景、内容区块 |
| Champagne Gold | `#C3A06A` | `--color-gold` | 强调色、图标、链接、按钮悬停状态 |
| Sand Beige | `#DAD3C1` | `--color-sand` | 边框、分隔线、输入框和次要背景 |

未来建立全局样式时使用以下颜色变量：

```css
:root {
  --color-forest: #1f4a37;
  --color-ivory: #faf8f5;
  --color-cream: #f3efe7;
  --color-gold: #c3a06a;
  --color-sand: #dad3c1;
}
```

### 推荐搭配

- 页面主背景：Warm Ivory
- 交替分区背景：Soft Cream
- 导航栏和页脚：Lumina Forest
- 主按钮：Lumina Forest 背景配 Warm Ivory 文字
- 强调按钮和装饰：Champagne Gold
- 边框和分隔线：Sand Beige
- 深色背景文字：Warm Ivory
- 浅色背景文字：Lumina Forest

## 前台页面

```text
HOME
SERVICES
|-- Facial
|-- Head Treatment
|-- Waxing
|   |-- Waxing Service
|   |-- Face Waxing
|   `-- Man's Waxing
`-- Hair Blow Dry
GROUP EVENTS
GIFT CARD
OUR SPA / FACILITIES
BOOK NOW
```

## 前台路由

| 页面 | 路由 |
| --- | --- |
| Home | `/` |
| Facial | `/services/facial` |
| Head Treatment | `/services/head-treatment` |
| Waxing Service | `/services/waxing` |
| Face Waxing | `/services/waxing/face` |
| Man's Waxing | `/services/waxing/man` |
| Hair Blow Dry | `/services/hair-blow-dry` |
| Group Events | `/group-events` |
| Gift Card | `/gift-card` |
| Our Spa / Facilities | `/spa-facilities` |
| Book Now | `/book-now` |

## 后台路由规划

| 页面 | 路由 |
| --- | --- |
| Admin Login | `/admin/login` |
| Dashboard | `/admin/dashboard` |
| Booking Management | `/admin/bookings` |
| Service Management | `/admin/services` |
| Gift Card Management | `/admin/gift-cards` |

## 项目目录

```text
Lumina/
|-- frontend/
|   |-- public/
|   |   `-- images/
|   `-- src/
|       |-- admin/
|       |-- api/
|       |-- assets/
|       |-- components/
|       |-- data/
|       |-- pages/
|       |-- routes/
|       `-- styles/
|-- backend/
|   `-- src/
|       |-- config/
|       |-- controllers/
|       |-- middleware/
|       |-- models/
|       |-- routes/
|       |-- services/
|       `-- utils/
|-- database/
|   |-- migrations/
|   `-- seeds/
`-- README.md
```

## 当前状态

- [x] 建立前后端项目目录
- [x] 确定品牌颜色
- [x] 规划前台与后台页面
- [ ] 初始化 React 前端
- [ ] 初始化 Express 后端
- [ ] 建立 MySQL 数据库结构
- [ ] 实现页面与 REST API

