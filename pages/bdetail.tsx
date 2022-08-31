import PostLink from '../components/board';
import Link from "next/link";
import BoardDetail from '../components/BoardDetail';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {    
    
    // const router = useRouter();
    // const queries = router.query;

    // useEffect(() => {
    //   if(!router.isReady) return;
    //   console.log(queries)
    // }, [router.isReady])

    const {query} = useRouter();

    return (
    <div>
          

        <h4>User 정보 수정</h4>
        <form className="px-4 py-3">
        <div className="form-group" id="write_area">
            <div id="title">
                <textarea className="form-control" name="title" id="utitle"  placeholder="제목"  required >{query.pid}</textarea>
            </div>
            <h2>{query.index}</h2>
            <div className="wi_line"></div>
            <div id="in_content">
                <textarea className="form-control" name="content" id="ucontent"  placeholder="내용"  required>{query.name}</textarea>
            </div>
 
            
            <div className="form-group">                
                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                {/* <input type="range" class="form-control-range" id="formControlRange"></input> */}
            </div>
            <div className="bt_se">
                <button type="submit">수정</button>
            </div>            
        </div>        
        </form>
    
    </div>
    );
};

export default Index;