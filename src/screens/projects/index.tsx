"use client";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
import Header from "@/components/ui/Header";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import PorjectList from "./components/ProjectList";
import useProjectSummaries from "./hooks/useProjectSummaries";

const ProjectListScreen = () => {
  const router = useRouter()
  const BackButton = useCallback(() => {

    return (<button onClick={router.back}><ArrowLeftIcon height={36} width={36} className="cursor-pointer" /></button>);
  }, [router]);
  const {data, isLoading} = useProjectSummaries()
  return (<>
    <Header 
      leftButton={<BackButton />} 
      withLogo={false} 
      title="Project List" 
      titleClassName="text-[#000]"
      withProjectIcon={false} />
      <div className="py-5">
        <PorjectList data={data ?? []} />
      </div>
  </>);
};

export default ProjectListScreen;