import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={94}
      viewBox="0 0 106 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M105.495 47.01c0-6.976-8.752-13.587-22.17-17.687C86.42 15.67 85.045 4.809 78.98 1.33 77.583.515 75.95.13 74.164.13v4.787c.99 0 1.785.193 2.452.558 2.924 1.674 4.193 8.05 3.204 16.25-.237 2.018-.624 4.143-1.097 6.31-4.215-1.03-8.816-1.824-13.654-2.339-2.903-3.971-5.914-7.578-8.946-10.733 7.01-6.504 13.59-10.067 18.063-10.067V.108c-5.914 0-13.655 4.207-21.482 11.505C44.877 4.358 37.136.193 31.223.193V4.98c4.45 0 11.052 3.542 18.062 10.003-3.01 3.156-6.02 6.74-8.88 10.712-4.86.515-9.462 1.31-13.677 2.361a64.67 64.67 0 01-1.118-6.225c-1.01-8.2.237-14.575 3.14-16.271.645-.386 1.483-.558 2.473-.558V.215c-1.807 0-3.44.386-4.86 1.202-6.043 3.478-7.397 14.318-4.28 27.927C8.71 33.466 0 40.056 0 47.011c0 6.976 8.752 13.588 22.17 17.688-3.097 13.652-1.72 24.514 4.343 27.991 1.398.816 3.032 1.202 4.839 1.202 5.913 0 13.654-4.207 21.481-11.505 7.827 7.255 15.569 11.42 21.482 11.42 1.806 0 3.44-.387 4.86-1.203 6.042-3.477 7.397-14.317 4.279-27.927 13.332-4.1 22.041-10.711 22.041-17.666zM77.497 32.694c-.795 2.769-1.784 5.624-2.903 8.479a101.507 101.507 0 00-2.816-5.152 116.002 116.002 0 00-3.097-5.023c3.054.45 6 1.009 8.816 1.696zM67.65 55.554c-1.677 2.898-3.398 5.646-5.182 8.2-3.204.28-6.451.43-9.72.43-3.247 0-6.494-.15-9.676-.408a118.304 118.304 0 01-5.204-8.157 111.725 111.725 0 01-4.473-8.544 111.847 111.847 0 014.452-8.565c1.677-2.898 3.397-5.645 5.182-8.2 3.204-.279 6.45-.43 9.72-.43 3.246 0 6.493.151 9.676.409a118.33 118.33 0 015.203 8.157 111.725 111.725 0 014.473 8.543 120.11 120.11 0 01-4.451 8.565zm6.945-2.79a91.895 91.895 0 012.968 8.543 96.627 96.627 0 01-8.86 1.717 118.535 118.535 0 003.097-5.087c.99-1.717 1.914-3.456 2.795-5.173zM52.79 75.668c-2-2.06-4-4.358-5.978-6.87 1.936.087 3.914.15 5.914.15 2.021 0 4.02-.042 5.978-.15a83.826 83.826 0 01-5.914 6.87zM36.792 63.024c-3.053-.45-6-1.009-8.816-1.696.795-2.769 1.784-5.624 2.902-8.479a101.593 101.593 0 002.818 5.152 142.101 142.101 0 003.096 5.023zm15.89-44.67c2 2.06 4 4.357 5.979 6.869-1.936-.086-3.914-.15-5.914-.15-2.021 0-4.02.042-5.978.15a83.826 83.826 0 015.914-6.87zM36.77 30.997a118.538 118.538 0 00-5.892 10.24 91.905 91.905 0 01-2.967-8.544 104.618 104.618 0 018.86-1.696zM17.31 57.873C9.698 54.63 4.774 50.38 4.774 47.01s4.924-7.642 12.536-10.862c1.85-.794 3.87-1.503 5.956-2.168 1.226 4.207 2.839 8.586 4.839 13.073-1.979 4.465-3.57 8.822-4.774 13.008a65.399 65.399 0 01-6.021-2.19zm11.569 30.674c-2.925-1.674-4.193-8.05-3.204-16.25.236-2.017.623-4.142 1.096-6.31 4.215 1.03 8.817 1.824 13.655 2.34 2.903 3.97 5.913 7.577 8.945 10.732-7.01 6.505-13.59 10.068-18.062 10.068-.968-.021-1.785-.215-2.43-.58zM79.884 72.19c1.01 8.2-.236 14.576-3.14 16.272-.644.386-1.483.558-2.472.558-4.451 0-11.053-3.542-18.063-10.004a101.43 101.43 0 008.881-10.711c4.86-.515 9.462-1.31 13.676-2.361.495 2.168.882 4.25 1.118 6.246zm8.279-14.317c-1.85.794-3.87 1.502-5.956 2.168-1.226-4.208-2.839-8.587-4.839-13.073 1.979-4.465 3.57-8.823 4.774-13.009a68.28 68.28 0 016.043 2.19c7.612 3.241 12.536 7.492 12.536 10.862-.022 3.37-4.946 7.642-12.558 10.861z"
        fill="#81D8F7"
      />
    </svg>
  )
}
