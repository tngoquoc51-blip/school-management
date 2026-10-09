import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Hệ thống quản lý trường học</h1>
      <ul>
        <li><Link href="/login">Đăng nhập</Link></li>
        <li><Link href="/admin">Admin</Link></li>
        <li><Link href="/teacher">Giáo viên</Link></li>
        <li><Link href="/student">Học sinh</Link></li>
      </ul>
    </main>
  );
}
