import LogoLoading from "@/components/ui/loading"
import React from "react"

const LoadingPage: React.FC = () => (
    <div className="w-full h-screen flex justify-center items-center">
        <LogoLoading size={96} />
    </div>
)


export default LoadingPage