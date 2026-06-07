import{L as e,T as t,Y as n,_ as r,b as i,g as a,gt as o,mt as s,x as c}from"./modules/shiki-BiiZU2CK.js";import{n as l,t as u}from"./slidev/context-CMhqCnrz.js";import{t as d}from"./slidev/image-right-C7Z5tS6l.js";import{t as f}from"./slidev/CodeBlockWrapper-BuCfc43F.js";var p={__name:`slides.md__slidev_32`,setup(p){let{$slidev:m,$nav:h,$clicksContext:g,$clicks:_,$page:v,$renderContext:y,$frontmatter:b}=l();return g.setup(),(l,p)=>{let m=f;return e(),r(d,o(t(s(u)(s(b),31))),{default:n(()=>[p[1]||=a(`h2`,null,`來安裝酷酷的動態桌布！`,-1),p[2]||=a(`ul`,null,[a(`li`,null,[i(`使用 `),a(`a`,{href:`https://github.com/jeffshee/hidamari`,target:`_blank`},`Hidamari`)]),a(`li`,null,`文件建議 flatpak 用執行，flatpak 你在上一張投影片裝好了`)],-1),c(m,{title:``,ranges:[]},{default:n(()=>[...p[0]||=[a(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[a(`code`,{class:`language-text`},[a(`span`,{class:`line`},[a(`span`,null,`flatpak install flathub io.github.jeffshee.Hidamari`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`# 設定開機自啟動`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`mkdir -p ~/.config/autostart`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`cat > ~/.config/autostart/hidamari.desktop <<'EOF'`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`[Desktop Entry]`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`Type=Application`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`Name=Hidamari`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`Comment=Start Hidamari video wallpaper`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`Exec=flatpak run io.github.jeffshee.Hidamari -b`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`Terminal=false`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`X-GNOME-Autostart-enabled=true`)]),i(`
`),a(`span`,{class:`line`},[a(`span`,null,`EOF`)]),i(`
`),a(`span`,{class:`line`},[a(`span`)])])],-1)]]),_:1})]),_:1},16)}}};export{p as default};