import {useState} from "react";

function Dashboard() {
    const [showUserList, setShowUserList] = useState(false);
    const [showGroupList, setShowGroupList] = useState(false);
    const [showAddFreinds, setShowAddfriends] = useState(false);
    const [showAddGroups, setShowAddGroups] = useState(false);
    return (
        <div>
            <div>
                <h2>欢迎回来！</h2>
                <p>这是登录成功之后的页面。</p>
            </div>

            <div>
                <h2>个人信息</h2>
                <p>用户名:</p>
                <p>用户id:</p>
                <p>钱包余额:</p>
                <button onClick={() => setShowUserList(!showUserList)}>
                    好友列表
                </button>

                {showUserList && (
                    <ul style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
                        <li>用户1：李四</li>
                        <li>用户2：王五</li>
                        <li>用户3：赵六</li>
                    </ul>
                )}
                <br/>
                <br/>
                <button onClick={() => setShowGroupList(!showGroupList)}>
                    群聊列表
                </button>

                {showGroupList && (
                    <ul style={{ border: '1px solid gray', padding: '10px', marginTop: '10px' }}>
                        <li>群聊1</li>
                        <li>群聊2</li>
                        <li>群聊3</li>
                    </ul>
                )}
            </div>
            <div>
                <h2>新的朋友</h2>
                <button onClick={() => setShowAddfriends(!showAddFreinds)}>
                    添加好友
                </button>
                {showAddFreinds &&(
                    <div>
                    <p>请输入用户id</p>
                    <input type="text" />
                        <button>搜索</button>
                    </div>
                )}


                <br/>
                <br/>
                <button onClick={() => setShowAddGroups(!showAddGroups)}>
                    加入群聊
                </button>
                {showAddGroups &&(
                    <div>
                        <p>请输入群聊id</p>
                        <input type="text" />
                        <button>搜索</button>
                    </div>
                )}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Dashboard;