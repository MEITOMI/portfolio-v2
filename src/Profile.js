// Profile.js
import React from "react";

const Profile = () => {
return (
<div className="max-w-3xl mx-auto px-4 py-8">
<div className="bg-white shadow-xl rounded-2xl p-6">
<h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
Profile
</h2>
<ul className="space-y-3 text-gray-700 text-lg">
<li>
<span className="font-semibold">名前：</span>富田愛惟（とみためい）
</li>
<li>
<span className="font-semibold">生年月日：</span>2002年6月2日
</li>
<li>
<span className="font-semibold">学歴：</span>
2025年3月　白梅学園大学子ども学部子ども学科 卒業
</li>
<li>
<span className="font-semibold">職歴：</span>
2025年4月～現在 保育士
</li>
<li>
働きながらフロントエンドエンジニアを目指して独学で勉強中
</li>
</ul>
</div>
</div>
);
};

export default Profile;

