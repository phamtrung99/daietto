import HeaderBarLayout from "../../assets/styled/HeaderBar";
import Image from 'next/image'

export const HeaderBar: React.FC = () => {
  return (
    <HeaderBarLayout>
      <Image src="/assets/images/Logo.png" alt="logo" width={69.84} height={65.57}></Image>
    </HeaderBarLayout>
  );
};
