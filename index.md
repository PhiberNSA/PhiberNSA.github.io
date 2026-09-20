---
layout: default
title: "Phiber — Digital Forensics & Anti-Cheat"
description: "Análise forense digital, engenharia reversa e deteção de cheats. Experiência em screenshare para comunidades de FiveM e Minecraft."
---

<div id="top" class="hero wrap">
  <h1 class="name">Phiber</h1>
  <p class="lede">Análise forense digital, engenharia reversa e deteção de cheats. Ajudo comunidades de FiveM e Minecraft a identificar o que os logs, artefactos e binários realmente mostram.</p>
  <div class="meta-row">
    <span class="pill">Digital Forensics</span>
    <span class="pill">Reverse Engineering</span>
    <span class="pill">Screenshare / Anti-Cheat</span>
    <span class="pill">Full-Stack Dev</span>
  </div>
</div>

<section id="sobre">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">01</span>
      <h2>Sobre</h2>
    </div>
    <div class="about-grid">
      <p>Trabalho em cyber security, com foco em análise forense digital e engenharia reversa — do comportamento real de um binário até à reconstrução de uma timeline de incidente. Também desenvolvo software full-stack, front-end e back-end, o que ajuda a perceber sistemas de ponta a ponta em vez de apenas os artefactos isolados.</p>
      <ul class="focus-list">
        <li><span class="mark">→</span> <span><strong>Forense digital</strong> — analisar sistemas e artefactos para perceber o que aconteceu de facto.</span></li>
        <li><span class="mark">→</span> <span><strong>Engenharia reversa</strong> — do assembly ao comportamento real de um executável.</span></li>
        <li><span class="mark">→</span> <span><strong>Full-stack</strong> — front-end, back-end e bases de dados.</span></li>
      </ul>
    </div>
  </div>
</section>

<section id="servicos">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">02</span>
      <h2>Screenshare &amp; deteção de cheats</h2>
    </div>
    <p class="muted">O que costumo fazer quando entro numa equipa de screenshare ou moderação anti-cheat.</p>

    <div class="service-block">
      <h3>Screenshare em comunidades de FiveM</h3>
      <p>Realizo screenshares em servidores brasileiros e ingleses de FiveM, e já passei por equipas dedicadas a isto — o que inclui recolher base/resposta rapidamente e depois validar com calma antes de qualquer decisão.</p>
      <div class="team-list">
        <span>NX Screenshare</span>
        <span>Vision Screenshare</span>
        <span>GC / FullAcademy</span>
      </div>
    </div>

    <div class="service-block">
      <h3>Minecraft KitMap — separar autoclicker de cheat real</h3>
      <p>Fiz screenshares no DynamicPvP e no StrafePvP, servidores de KitMap onde autoclicker é permitido. Isso obriga a um critério mais apertado: não basta ver um clique rápido, é preciso perceber se é uma ferramenta permitida ou algo como killaura/reach disfarçado.</p>
      <div class="team-list">
        <span>DynamicPvP</span>
        <span>StrafePvP</span>
        <span>Autoclicker vs. cheat</span>
      </div>
    </div>

    <div class="service-block">
      <h3>Deteção remota de qualquer tipo de cheat</h3>
      <p>Com as ferramentas certas de análise forense, é possível detetar remotamente praticamente qualquer tipo de cheat — de killaura a comportamentos mais discretos. O processo passa por cruzar processos, módulos carregados e artefactos do sistema com ferramentas como <span class="artifact">System Informer</span> e <span class="artifact">Detect It Easy (DiE)</span>, entre outras, para confirmar exatamente o que está a correr e como se comporta.</p>
    </div>
  </div>
</section>

<section id="casos">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">03</span>
      <h2>Registo de casos</h2>
    </div>
    <p class="muted">Exemplos reais de como estruturo uma análise, respondidos em entrevistas de staff.</p>

    <div class="case">
      <div class="case-head">
        <span class="case-id">CASE-01 · Anti-forense num screenshare</span>
        <span class="case-status">timeline</span>
      </div>
      <div class="case-body">
        <h4>Cenário: Event Logs limpos, Prefetch apagado, traces de PowerShell com Invoke-WebRequest, threads do SysMain suspensas.</h4>
        <p class="a">Relaciono todos os artefactos para montar uma timeline única e, a partir daí, valido primeiro os traces de PowerShell: o <span class="artifact">Invoke-WebRequest</span> é a prioridade porque aponta diretamente para intenção — verifico o URL pedido, o processo que o invocou, o utilizador ativo e o ficheiro que foi descarregado. Os Event Logs limpos e o Prefetch apagado por si só já são indicadores fortes de anti-forense e, combinados com o download confirmado, considero motivo suficiente para aplicar punição.</p>
      </div>
    </div>

    <div class="case">
      <div class="case-head">
        <span class="case-id">CASE-02 · Executável sem assinatura, 0 deteções no VT</span>
        <span class="case-status">validação</span>
      </div>
      <div class="case-body">
        <h4>Cenário: sem assinatura digital, traces Unicode/interrogação no System Informer, entradas de rename no USN Journal, 0 deteções no VirusTotal.</h4>
        <p class="a">Zero deteções no VirusTotal não significa inocente — significa apenas que a hash não é conhecida. Antes de decidir, valido: a hash em si, a origem do ficheiro, como foi executado, o número/árvore de processos, o histórico no <span class="artifact">USN Journal</span> (as entradas de rename costumam indicar tentativa de esconder o nome original) e se houve atividade de rede associada. Só depois de cruzar estes pontos é que considero se há base para punição.</p>
      </div>
    </div>

    <div class="case">
      <div class="case-head">
        <span class="case-id">CASE-03 · DLLs de cheat &amp; LOLBins</span>
        <span class="case-status">metodologia</span>
      </div>
      <div class="case-body">
        <h4>Como identificar DLL hijacking, DLL proxying, manual mapping, e distinguir uso legítimo de LOLBins/fileless (powershell.exe, regsvr32.exe) de execução maliciosa.</h4>
        <p class="a">Para DLLs procuro módulos carregados que não é normal estarem ali. Em DLL hijacking verifico os exports e se existem DLLs fora do local esperado pelo Windows ou pelo próprio programa. Para manual mapping, o ficheiro muitas vezes nem existe em disco — por isso analiso a memória à procura de regiões executáveis sem ficheiro associado.</p>
        <p class="a">Para LOLBins, o binário em si (powershell.exe, regsvr32.exe) não diz nada sozinho — o que importa é o contexto: processo-pai, linha de comando, utilizador, scripts executados e ligações de rede ou ficheiros tocados. Depois confirmo tudo isso no Event Viewer e no Prefetch antes de tirar qualquer conclusão.</p>
      </div>
    </div>
  </div>
</section>

<section id="stack">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">04</span>
      <h2>Stack &amp; especialidades</h2>
    </div>
    <div class="stack-groups">
      <div class="stack-row">
        <span class="label">Linguagens</span>
        <span class="chip">C</span>
        <span class="chip">C++</span>
        <span class="chip">Python</span>
        <span class="chip">Assembly</span>
        <span class="chip">TypeScript</span>
        <span class="chip">JavaScript</span>
        <span class="chip">SQL</span>
      </div>
      <div class="stack-row">
        <span class="label">Especialidades</span>
        <span class="chip">Reverse Engineering</span>
        <span class="chip">Digital Forensics</span>
        <span class="chip">Cyber Security</span>
      </div>
    </div>
  </div>
</section>

<section id="projetos">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">05</span>
      <h2>Projetos no GitHub</h2>
    </div>
    <p class="muted">Repositórios públicos, incluindo contribuições e forks de ferramentas de forense/RE que uso no dia a dia.</p>

    <a class="repo" href="https://github.com/PhiberNSA/PhiberNSA" target="_blank" rel="noopener">
      <div>
        <div class="repo-name">PhiberNSA</div>
        <div class="repo-desc">Perfil e README principal.</div>
      </div>
      <span class="repo-lang">profile</span>
    </a>
    <a class="repo" href="https://github.com/PhiberNSA/Detect-It-Easy" target="_blank" rel="noopener">
      <div>
        <div class="repo-name">Detect-It-Easy</div>
        <div class="repo-desc">Identificação de tipos de ficheiro para Windows, Linux e macOS.</div>
      </div>
      <span class="repo-lang">JavaScript</span>
    </a>
    <a class="repo" href="https://github.com/PhiberNSA/volatility3" target="_blank" rel="noopener">
      <div>
        <div class="repo-name">volatility3</div>
        <div class="repo-desc">Framework de análise forense de memória.</div>
      </div>
      <span class="repo-lang">Python</span>
    </a>
    <a class="repo" href="https://github.com/PhiberNSA/plaso" target="_blank" rel="noopener">
      <div>
        <div class="repo-name">plaso</div>
        <div class="repo-desc">Geração de super-timelines forenses.</div>
      </div>
      <span class="repo-lang">Python</span>
    </a>
    <a class="repo" href="https://github.com/PhiberNSA/capa" target="_blank" rel="noopener">
      <div>
        <div class="repo-name">capa</div>
        <div class="repo-desc">Identificação de capacidades em ficheiros executáveis (Mandiant FLARE).</div>
      </div>
      <span class="repo-lang">Python</span>
    </a>
    <a class="repo" href="https://github.com/PhiberNSA/XTranslation" target="_blank" rel="noopener">
      <div>
        <div class="repo-name">XTranslation</div>
        <div class="repo-desc">Fork de ferramenta de tradução.</div>
      </div>
      <span class="repo-lang">—</span>
    </a>
  </div>
</section>

<section id="contacto">
  <div class="wrap">
    <div class="section-head">
      <span class="section-num">06</span>
      <h2>Contacto</h2>
    </div>
    <div class="contact-box">
      <div class="contact-links">
        <a href="https://discord.com" target="_blank" rel="noopener">Discord — nsa.phiber</a>
        <a href="https://github.com/PhiberNSA" target="_blank" rel="noopener">GitHub — @PhiberNSA</a>
      </div>
      <a class="cta" href="https://github.com/PhiberNSA" target="_blank" rel="noopener">Ver perfil no GitHub</a>
    </div>
  </div>
</section>
