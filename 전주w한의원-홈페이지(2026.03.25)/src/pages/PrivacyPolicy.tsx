import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">개인정보처리방침</h1>
        <div className="w-12 h-1 bg-navy-800"></div>
      </div>
      
      <div className="space-y-8 text-navy-700 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">1. 개인정보의 처리 목적</h2>
          <p>
            전주W한의원(이하 '본원')은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>진료 및 치료 서비스 제공</li>
            <li>진료 예약 및 상담</li>
            <li>진료비 청구, 수납, 환불 등의 원무 처리</li>
            <li>의료법, 건강보험법 등 관련 법령에 따른 의무 이행</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">2. 처리하는 개인정보 항목</h2>
          <p>본원은 진료 및 서비스 제공을 위해 아래와 같은 최소한의 개인정보를 수집하고 있습니다.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>필수항목: 성명, 주민등록번호(또는 외국인등록번호), 주소, 연락처, 병력 및 가족력 등 진료에 필요한 건강정보</li>
            <li>선택항목: 이메일, 보호자 연락처 등</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">3. 개인정보의 처리 및 보유 기간</h2>
          <p>
            본원은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>진료기록부: 10년 (의료법)</li>
            <li>환자 명부: 5년 (의료법)</li>
            <li>처방전: 2년 (의료법)</li>
            <li>건강보험 청구 관련 기록: 5년 (국민건강보험법)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">4. 정보주체의 권리·의무 및 행사방법</h2>
          <p>
            정보주체는 본원에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>개인정보 열람요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제요구</li>
            <li>처리정지 요구</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">5. 개인정보의 안전성 확보조치</h2>
          <p>
            본원은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
            <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
            <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
