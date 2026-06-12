"use client";

import Script from "next/script";

const WIDGET_SCRIPT = `
(function() {
  var container = document.getElementById('epic-walloflove');
  var config = {
    layout: container.dataset.layout || 'masonry',
    mode: container.dataset.mode || 'single',
    outlets: container.dataset.outlets || 'all',
    theme: container.dataset.theme || 'light',
    limit: container.dataset.limit || '12',
    style: container.dataset.style || 'rounded',
    rows: parseInt(container.dataset.rows || '3'),
    showHeader: container.dataset.showHeader !== 'false',
    showWriteReview: container.dataset.showWriteReview !== 'false'
  };

  var GOOGLE_G = '<svg width="14" height="14" viewBox="0 0 48 48" style="flex-shrink:0"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.7 2.9l5.7-5.7C33.9 6.5 29.2 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z"/><path fill="#4CAF50" d="M24 43.5c5.1 0 9.7-1.9 13.2-5.1l-6.1-5c-2 1.4-4.5 2.1-7.1 2.1-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.6 39 16.2 43.5 24 43.5z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.4l6.1 5C40.9 35.5 43.5 30.2 43.5 24c0-1.2-.1-2.3-.4-3.5z"/></svg>';
  var VERIFIED = '<svg width="14" height="14" viewBox="0 0 24 24" fill="#1A73E8"><path d="M12 1l3.09 2.26L18.5 3l1.5 3.41L23 8l-1.41 3.09L23 14l-3 1.59L21.5 19l-3.41-.26L15 21l-3-2.5L9 21l-3.09-2.26L2.5 19l1.41-3.41L1 14l3-1.91L1 8l3.41-1.59L5.5 3l3.41.26L12 1z"/><path fill="#fff" d="M10.5 14.2l5.3-5.3-1.4-1.4-3.9 3.9-1.9-1.9-1.4 1.4z"/></svg>';
  function star(filled){return '<svg width="14" height="14" viewBox="0 0 24 24" fill="'+(filled?"#FBBC04":"#E5E7EB")+'"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>';}
  function stars(n){var s='';for(var i=0;i<5;i++){s+=star(i<n);}return '<div style="display:flex;gap:2px">'+s+'</div>';}
  function timeAgo(iso){if(!iso)return'';var d=new Date(iso);var s=Math.floor((Date.now()-d.getTime())/1000);if(s<60)return s+'s ago';var m=Math.floor(s/60);if(m<60)return m+'m ago';var h=Math.floor(m/60);if(h<24)return h+'h ago';var dd=Math.floor(h/24);if(dd<30)return dd+' days ago';var mo=Math.floor(dd/30);if(mo<12)return mo+' months ago';return Math.floor(mo/12)+' years ago';}
  function initial(n){return (n||'A').trim().charAt(0).toUpperCase();}
  function colorFor(n){var p=['#4F46E5','#0EA5E9','#10B981','#F59E0B','#EF4444','#8B5CF6','#EC4899'];return p[(n||'A').charCodeAt(0)%p.length];}
  function escapeHtml(s){return (s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}

  function cardHtml(r){
    var name=escapeHtml(r.author_name||'Anonymous');
    var avatar=r.author_avatar?'<img src="'+r.author_avatar+'" style="width:40px;height:40px;border-radius:50%;object-fit:cover" alt="">':'<div style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;background:'+colorFor(r.author_name)+'">'+initial(r.author_name)+'</div>';
    var body=escapeHtml(r.comment_text||'');
    return '<div class="epic-card">'+
      '<div class="epic-head">'+
        '<div class="epic-ava-wrap">'+avatar+'<div class="epic-g-badge">'+GOOGLE_G+'</div></div>'+
        '<div class="epic-meta"><div class="epic-name">'+name+VERIFIED+'</div><div class="epic-time">'+timeAgo(r.posted_at||r.created_at)+'</div></div>'+
      '</div>'+
      stars(r.rating||0)+
      '<p class="epic-body" data-full="'+encodeURIComponent(body)+'">'+body+'</p>'+
      (body.length>180?'<button class="epic-more" type="button">Read more</button>':'')+
      '<div class="epic-foot">'+GOOGLE_G+'<span>Posted on Google</span></div>'+
    '</div>';
  }

  function bindReadMore(root){
    root.querySelectorAll('.epic-more').forEach(function(btn){
      btn.addEventListener('click',function(){
        var p=btn.previousElementSibling;
        var expanded=p.classList.toggle('expanded');
        btn.textContent=expanded?'Show less':'Read more';
      });
    });
  }

  function headerHtml(label, ov, writeUrl){
    if(!config.showHeader) return '';
    var btn = (config.showWriteReview && writeUrl) ? '<a class="epic-write" href="'+writeUrl+'" target="_blank" rel="noopener">Write a Review</a>' : '';
    return '<div class="epic-header"><div><div class="epic-h-label">'+label+'</div><div class="epic-h-rating"><span class="epic-h-num">'+(ov.avg_rating||0)+'</span>'+stars(Math.round(ov.avg_rating||0))+'<span class="epic-h-count">('+(ov.total||0)+')</span></div></div>'+btn+'</div>';
  }

  function renderGrid(reviews, label, ov, writeUrl){
    var html=headerHtml(label, ov, writeUrl);
    html+='<div class="epic-wall '+config.layout+'">';
    reviews.forEach(function(r){html+=cardHtml(r);});
    html+='</div>';
    return html;
  }

  function renderCarousel(reviews, label, ov, writeUrl){
    var html=headerHtml(label, ov, writeUrl);
    html+='<div class="epic-carousel">';
    reviews.forEach(function(r){html+=cardHtml(r);});
    html+='</div>';
    return html;
  }

  function renderMarquee(reviews){
    var perRow=Math.ceil(reviews.length/config.rows);
    var html='<div class="epic-marquee">';
    for(var i=0;i<config.rows;i++){
      var row=reviews.slice(i*perRow,(i+1)*perRow);
      var dup=row.concat(row);
      html+='<div class="epic-marquee-row '+(i%2?'reverse':'')+'">';
      dup.forEach(function(r){html+=cardHtml(r);});
      html+='</div>';
    }
    html+='</div>';
    return html;
  }

  function scopeParams(){
    if(!config.outlets || config.outlets === 'all') return '';
    return '&outlet_ids='+encodeURIComponent(config.outlets);
  }
  function fetchReviews(outletId, cb){
    var url = 'https://uthqjaflckswjjgokjdw.supabase.co/functions/v1/get-wall-of-love?limit='+config.limit;
    if(outletId && outletId !== 'all'){
      url += '&outlet_id='+encodeURIComponent(outletId);
    } else {
      url += scopeParams();
    }
    fetch(url)
      .then(function(r){return r.json();}).then(function(d){cb(d.reviews||[],d.overall||{avg_rating:0,total:0});});
  }

  function renderByLayout(reviews, label, ov, writeUrl){
    if(config.layout==='marquee'){return renderMarquee(reviews);}
    if(config.layout==='carousel'){return renderCarousel(reviews,label,ov,writeUrl);}
    return renderGrid(reviews,label,ov,writeUrl);
  }

  function renderSingle(){
    var scope = (config.outlets && config.outlets.indexOf(',') === -1 && config.outlets !== 'all')
      ? config.outlets : 'all';
    fetchReviews(scope, function(reviews, ov){
      var label = (config.outlets==='all') ? 'Overall Rating' : 'Google Reviews';
      container.innerHTML=renderByLayout(reviews,label,ov,'');
      bindReadMore(container);
    });
  }

  function renderMultiTab(){
    var url='https://uthqjaflckswjjgokjdw.supabase.co/functions/v1/get-wall-of-love?limit='+config.limit+'&include_outlets=true'+scopeParams();
    fetch(url)
      .then(function(r){return r.json();}).then(function(d){
        var allOutlets=d.outlets||[]; var ov=d.overall||{avg_rating:0,total:0};
        var isAllScope = !config.outlets || config.outlets === 'all';
        var initialId = 'all';
        var tabs='<div class="epic-tabs">';
        var allLabel = isAllScope ? 'All Reviews' : 'All Selected';
        tabs+='<button class="epic-tab active" data-id="all" data-write="">'+GOOGLE_G+'<span>'+allLabel+'</span><span class="epic-tab-rating">'+(ov.avg_rating||0)+'★</span></button>';
        allOutlets.forEach(function(o){
          tabs+='<button class="epic-tab" data-id="'+o.id+'" data-write="'+(o.google_maps_url||'')+'">'+GOOGLE_G+'<span>'+escapeHtml(o.outlet_name)+'</span><span class="epic-tab-rating">'+(o.avg_rating||0)+'★</span></button>';
        });
        tabs+='</div>';
        container.innerHTML=tabs+'<div class="epic-tab-body"></div>';
        var body=container.querySelector('.epic-tab-body');
        function fetchAndRender(outletId, writeUrl){
          fetchReviews(outletId,function(reviews,ovv){
            body.innerHTML=renderByLayout(reviews, outletId==='all'?'Overall Rating':'Google Reviews', ovv, writeUrl);
            bindReadMore(body);
          });
        }
        function setActiveTab(el){
          container.querySelectorAll('.epic-tab').forEach(function(x){x.classList.remove('active');});
          el.classList.add('active');
        }
        fetchAndRender(initialId, '');
        container.querySelectorAll('.epic-tab').forEach(function(t){
          t.addEventListener('click',function(){
            setActiveTab(t);
            fetchAndRender(t.dataset.id, t.dataset.write||'');
          });
        });
      });
  }

  if(config.mode==='multi-tab'){renderMultiTab();} else {renderSingle();}
})();
`;

const WIDGET_STYLES = `
#epic-walloflove{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#111827}
#epic-walloflove .epic-header{display:flex;align-items:center;justify-content:space-between;padding:12px 4px 16px}
#epic-walloflove .epic-h-label{font-size:13px;color:#6B7280;margin-bottom:4px}
#epic-walloflove .epic-h-rating{display:flex;align-items:center;gap:8px}
#epic-walloflove .epic-h-num{font-size:28px;font-weight:700;color:#111827}
#epic-walloflove .epic-h-count{color:#6B7280;font-size:14px}
#epic-walloflove .epic-write{background:#1A73E8;color:#fff;padding:8px 16px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:500}
#epic-walloflove .epic-wall{display:grid;gap:16px}
#epic-walloflove .epic-wall.masonry{display:block;columns:3;column-gap:16px;grid-template-columns:none}
#epic-walloflove .epic-wall.masonry .epic-card{break-inside:avoid;page-break-inside:avoid;margin:0 0 16px 0;display:inline-block;width:100%;min-width:0}
@media (max-width:1024px){#epic-walloflove .epic-wall.masonry{columns:2}}
@media (max-width:640px){#epic-walloflove .epic-wall.masonry{columns:1}}
#epic-walloflove .epic-carousel{display:flex;gap:16px;overflow-x:auto;padding:8px 4px 16px;scroll-snap-type:x mandatory}
#epic-walloflove .epic-carousel .epic-card{scroll-snap-align:start}
#epic-walloflove .epic-marquee{display:flex;flex-direction:column;gap:16px;overflow:hidden;padding:8px 0}
#epic-walloflove .epic-marquee-row{display:flex;gap:16px;animation:epic-mq-l 40s linear infinite;width:max-content}
#epic-walloflove .epic-marquee-row.reverse{animation-name:epic-mq-r}
@keyframes epic-mq-l{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@keyframes epic-mq-r{from{transform:translateX(-50%)}to{transform:translateX(0)}}
#epic-walloflove .epic-card{background:#fff;border:1px solid #F3F4F6;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,.06);padding:16px;width:280px;min-width:280px;display:flex;flex-direction:column;gap:10px;flex-shrink:0}
#epic-walloflove .epic-head{display:flex;gap:12px;align-items:flex-start}
#epic-walloflove .epic-ava-wrap{position:relative}
#epic-walloflove .epic-g-badge{position:absolute;bottom:-2px;left:-2px;background:#fff;border-radius:50%;padding:2px;box-shadow:0 1px 2px rgba(0,0,0,.15);width:16px;height:16px;display:flex;align-items:center;justify-content:center}
#epic-walloflove .epic-g-badge svg{width:10px;height:10px}
#epic-walloflove .epic-name{font-weight:600;font-size:14px;display:flex;align-items:center;gap:4px}
#epic-walloflove .epic-time{font-size:12px;color:#6B7280}
#epic-walloflove .epic-body{font-size:14px;line-height:1.5;color:#374151;margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
#epic-walloflove .epic-body.expanded{display:block;-webkit-line-clamp:unset;overflow:visible}
#epic-walloflove .epic-more{background:none;border:none;color:#1A73E8;font-size:12px;cursor:pointer;padding:0;text-align:left}
#epic-walloflove .epic-foot{display:flex;align-items:center;gap:6px;font-size:11px;color:#9CA3AF;margin-top:auto}
#epic-walloflove .epic-tabs{display:flex;gap:8px;overflow-x:auto;border-bottom:1px solid #E5E7EB;padding-bottom:0}
#epic-walloflove .epic-tab{display:flex;align-items:center;gap:6px;background:none;border:none;padding:12px 16px;cursor:pointer;font-size:14px;color:#6B7280;border-bottom:2px solid transparent;white-space:nowrap}
#epic-walloflove .epic-tab.active{color:#1A73E8;border-bottom-color:#1A73E8;font-weight:600}
#epic-walloflove .epic-tab-rating{font-size:12px;color:#6B7280}
#epic-walloflove .epic-tab.active .epic-tab-rating{color:#1A73E8}
@media(max-width:600px){#epic-walloflove .epic-header{flex-direction:column;align-items:flex-start;gap:12px}}
`;

export default function GoogleReviewsWidget() {
  return (
    <>
      {/* Widget styles injected once */}
      <style dangerouslySetInnerHTML={{ __html: WIDGET_STYLES }} />

      {/* Widget mount point */}
      <div
        id="epic-walloflove"
        data-layout="marquee"
        data-mode="single"
        data-outlets="41029b94-1186-4644-9871-531925a5afbd"
        data-theme="light"
        data-limit="12"
        data-style="rounded"
        data-rows="2"
        data-show-header="true"
        data-show-write-review="true"
      />

      {/* Widget script — runs after page is interactive so the div is in the DOM */}
      <Script
        id="epic-walloflove-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: WIDGET_SCRIPT }}
      />
    </>
  );
}
