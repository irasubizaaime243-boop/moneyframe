const apiUrl = process.env.API_URL || 'http://localhost:4000';

async function getTasks() {
  try {
    const response = await fetch(`${apiUrl}/api/tasks`, { cache: 'no-store' });
    if (!response.ok) return [];
    const data = await response.json();
    return data.tasks || [];
  } catch {
    return [];
  }
}

const examples = [
  { id: 'example-1', title: 'Uzuza ubushakashatsi bugufi', description: 'Tanga igitekerezo cyawe ku bicuruzwa na serivisi.', rewardRwf: 500, category: 'Ubushakashatsi' },
  { id: 'example-2', title: 'Ongera ubumenyi bwawe', description: 'Tangira amasomo magufi agufasha kwitegura akazi.', rewardRwf: 0, category: 'Kwiga' },
  { id: 'example-3', title: 'Shyira serivisi yawe ku rubuga', description: 'Erekana ibyo ushoboye kandi ugere ku bakiriya bashya.', rewardRwf: 0, category: 'Serivisi' },
];

export default async function HomePage() {
  const tasks = await getTasks();
  const items = tasks.length ? tasks : examples;

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-mark">M</span> moneyframe</a>
        <div className="nav-links"><a href="#amahirwe">Amahirwe</a><a href="#uko-bikora">Uko bikora</a><a href="#umutekano">Umutekano</a></div>
        <a className="button button-small" href="#amahirwe">Tangira ubu <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> Urubuga rw’amahirwe yo kuri internet</div>
          <h1>Ubumenyi bwawe.<br /><span>Amahirwe yawe.</span></h1>
          <p>Shakisha imirimo mito, wige ubumenyi bushya, cyangwa werekane serivisi zawe. Tangira urugendo rwawe uyu munsi.</p>
          <div className="hero-actions"><a className="button" href="#amahirwe">Reba amahirwe <span aria-hidden="true">→</span></a><a className="text-link" href="#uko-bikora">Menya uko bikora <span aria-hidden="true">↓</span></a></div>
          <div className="trust-note"><span className="avatar-stack"><i>U</i><i>A</i><i>M</i></span><span>Byubakiwe amahirwe y’Abanyarwanda</span></div>
        </div>
        <div className="hero-art" aria-label="Igishushanyo cyerekana amafaranga n’amahirwe" role="img">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="balance-card"><div className="card-top"><span>URUGENDO RWAWE</span><span className="card-menu">•••</span></div><div className="balance-label">Amahirwe atangiye</div><div className="balance-value">Intambwe ku yindi <span>↗</span></div><div className="chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="chart-bottom"><span>Ubu</span><span>Imbaraga zawe zifite agaciro</span></div></div>
          <div className="floating-card"><span className="floating-icon">✦</span><span><b>Kwiga no gukora</b><small>amahirwe ari hafi yawe</small></span><span className="arrow">↗</span></div>
          <div className="decor decor-a">✳</div><div className="decor decor-b">✦</div>
        </div>
      </section>

      <section className="stats wrap" aria-label="Ibyo Moneyframe itanga"><div><b>Imirimo mito</b><span>Shakisha imirimo ijyanye n’ubushobozi bwawe</span></div><div><b>Serivisi n’ibicuruzwa</b><span>Menyesha abandi ibyo utanga</span></div><div><b>Kwiga</b><span>Ongera ubumenyi bwawe buri munsi</span></div></section>

      <section className="opportunities section" id="amahirwe"><div className="wrap"><div className="section-heading"><div><div className="eyebrow">AMAHIRWE YAWE</div><h2>Tangira ku cyo ushoboye</h2></div><a className="text-link" href="#uko-bikora">Reba uko bikora <span aria-hidden="true">→</span></a></div><div className="task-grid">{items.map((task, index) => <article className="task-card" key={task.id}><div className={`task-icon icon-${index % 3}`}>{['↗', '◎', '✳'][index % 3]}</div><span className="category">{task.category || 'Amahirwe'}</span><h3>{task.title}</h3><p>{task.description}</p><div className="task-footer"><span>{task.rewardRwf > 0 ? `${Number(task.rewardRwf).toLocaleString('rw-RW')} RWF` : 'Tangira kwiga'}</span><a href="#uko-bikora" aria-label={`Menya byinshi kuri ${task.title}`}>→</a></div></article>)}</div><p className="demo-note">Ibyerekanwa ni urugero rw’igerageza. Amafaranga n’ubwishyu nyakuri ntibiratangira.</p></div></section>

      <section className="how wrap" id="uko-bikora"><div className="how-intro"><div className="eyebrow">BIROROSHYE</div><h2>Intambwe nto,<br /><span>amahirwe mashya.</span></h2><p>Moneyframe iguhuza n’ibyo ushoboye n’amahirwe ari kuri internet.</p></div><div className="steps"><div className="step"><span>01</span><div><h3>Shakisha</h3><p>Reba imirimo, serivisi n’amasomo biri ku rubuga.</p></div></div><div className="step"><span>02</span><div><h3>Hitamo</h3><p>Hitamo ikijyanye n’ubushobozi n’inyungu zawe.</p></div></div><div className="step"><span>03</span><div><h3>Tera imbere</h3><p>Yongera ubumenyi, wubake ubunararibonye, kandi ugere ku bakiriya.</p></div></div></div></section>

      <footer className="footer" id="umutekano"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">M</span> moneyframe</a><p>Urubuga rugufasha kubona amahirwe. Nta mafaranga yizewe cyangwa akazi twizeza.</p><span>© {new Date().getFullYear()} Moneyframe · Rwanda</span></div></footer>
    </main>
  );
}
