import Icon from './Icon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200/80 bg-white/85">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 py-5 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#e60023] flex items-center justify-center">
            <Icon name="image" className="text-white text-[16px]" />
          </span>
          <span className="font-semibold text-[#1a1a1a]">PixelBoard</span>
          <span>© {year}</span>
        </div>
        <span>Desplegado con GitHub Actions · S3 · CloudFront</span>
      </div>
    </footer>
  );
}
