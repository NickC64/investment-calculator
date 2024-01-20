export default function camelCaseToNormal(str) {
    return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str1){ return str1.toUpperCase(); })
}