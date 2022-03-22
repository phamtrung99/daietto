import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Flex from "../assets/styled/FlexLayout";
import HomeLayout from "../assets/styled/Home";
import { HeaderBar } from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <HeaderBar></HeaderBar>
    </HomeLayout>
  );
};

export default Home;
