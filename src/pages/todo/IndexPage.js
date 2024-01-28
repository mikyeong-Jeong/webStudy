import { Outlet, useNavigate } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";
import { useCallback } from "react";

const IndexPage = () => {

    const navigate = useNavigate()

    const handleClickList = useCallback(() => {
        navigate({ pathname: 'list' });
    }, [navigate]); // 의존성 배열에 navigate 추가

    const handleClickAdd = useCallback(() => {
        navigate({ pathname: 'add' });
    }, [navigate]); // 의존성 배열에 navigate 추가

    return (
        <BasicLayout>
            <div className="w-full flex m-2 p-2">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
                onClick={ handleClickList }>
                    LIST
                </div>
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
                onClick={ handleClickAdd }>
                    ADD
                </div>
            </div>
            <div className="flex flex-wrap w-full">
                <Outlet/>
            </div>
        </BasicLayout>
    );
}

export default IndexPage;