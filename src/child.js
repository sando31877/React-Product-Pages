function ChildComponent(props){
    const {name, age} = props;
    return(
    <div>
        <p>자식 컴포넌트
        , &nbsp;&nbsp;&nbsp; 이름은 {name}, {age}살 입니다.</p>
    </div>
    );
}

export default ChildComponent