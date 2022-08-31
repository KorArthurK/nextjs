import Link from 'next/link';
import type {FC,ReactNode} from 'react';

type test = {
    id:number
    title:string
}
//export default (props: React.ReactElement) => (
const test = "test";
const test1= "test1";

const BoardDetail = () => (
// export const test: FC<props> =
    <div>     
        
        <h4>User 정보 수정</h4>
        <form className="px-4 py-3">
        <div className="form-group" id="write_area">
            <div id="title">
                <textarea className="form-control" name="title" id="utitle"  placeholder="제목"  required></textarea>
            </div>
 
            <div className="wi_line"></div>
            <div id="in_content">
                <textarea className="form-control" name="content" id="ucontent"  placeholder="내용"  required></textarea>
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

export default BoardDetail;