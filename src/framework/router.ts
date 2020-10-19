/*
 * @Author: huajian
 * @LastEditors: huajian
 */


interface Item{
  path:string
  name:string
  action:()=>void
  target:any
  method:string
}


export let routers:Item[];
export function Router(Target):any {
  const path = Target.name.replace('Controller', '').toLowerCase();
  const target = new Target;

  Object.getOwnPropertyNames(Target.prototype).forEach((key:string) => {
    if (key === 'constructor' || !/(Get|Post)$/.test(key)) {
      return;
    }
    const  name = key.replace('Get', '').replace('Post', '');
    const item:Item = {
      path: '/' + path + '/' + name,
      name,
      target,
      action: target[key].bind(target),
      method: key.indexOf('Post') > -1 ? 'post' : 'get',
    };
    !routers && (routers = []);
    routers.push(item);
  });
}
