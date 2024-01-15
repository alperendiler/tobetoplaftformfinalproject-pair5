import React from 'react'

type Props = {}

export default function Main({}: Props) {
  return (
    <>
    <div className='container'>
        <img src="" alt="" />
        <span>Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.</span>
        <span>Aradığın  “İş”  Burada!</span>
        <div className="card">
      <div className="card-body">

        {/* Bordered Tabs */}
        <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">Başvurularım</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Eğitimlerim</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Duyuru Ve Haberlerim</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Anketlerim</button>
          </li>
        </ul>
        <div className="tab-content pt-2" id="borderedTabContent">
          <div className="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
            Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
          </div>
          <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
            Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
          </div>
          <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="contact-tab">
            Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
          </div>
        </div>{/* End Bordered Tabs */}
      </div>
    </div>
        </div>
        </>
  )
}