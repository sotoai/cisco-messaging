import { useState, useRef } from "react";
import { C } from "../../theme";

export function UploadModal({ onClose, onUploadComplete }) {
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0];
    if (f && f.name.toLowerCase().endsWith(".pptx")) {
      setFile(f);
      setErrorMsg("");
    } else {
      setErrorMsg("Only .pptx files are accepted.");
    }
  };

  const handleFileSelect = (e) => {
    const f = e.target.files[0];
    if (f) {
      setFile(f);
      setErrorMsg("");
    }
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setStatus("uploading");
    setErrorMsg("");

    try {
      const timer1 = setTimeout(() => setStatus("extracting"), 1500);
      const timer2 = setTimeout(() => setStatus("thumbnails"), 4000);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/decks/upload", {
        method: "POST",
        body: formData,
      });

      clearTimeout(timer1);
      clearTimeout(timer2);

      if (!res.ok) {
        const err = await res.json().catch(() => ({ detail: "Upload failed" }));
        throw new Error(err.detail || `Server error ${res.status}`);
      }

      const data = await res.json();
      setStatus("done");

      setTimeout(() => {
        onUploadComplete(data);
        onClose();
      }, 800);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Upload failed. Is the backend running?");
      setUploading(false);
    }
  };

  const statusText = {
    uploading: "Uploading...",
    extracting: "Extracting slides...",
    thumbnails: "Generating thumbnails...",
    done: "Done!",
    error: "",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)",
        zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 520, background: C.bg, borderRadius: 2,
          border: `1px solid ${C.border}`, overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{
          padding: "20px 24px", borderBottom: `1px solid ${C.border}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: C.text, margin: 0 }}>Upload Slide Deck</h3>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer", color: C.textTertiary, fontSize: 18, lineHeight: 1 }}
          >&times;</button>
        </div>

        {/* Body */}
        <div style={{ padding: "24px" }}>
          {!uploading ? (
            <>
              {/* Drop zone */}
              <div
                onClick={() => inputRef.current?.click()}
                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                style={{
                  border: `2px dashed ${dragOver ? C.text : C.border}`,
                  borderRadius: 2, padding: "48px 24px", textAlign: "center",
                  cursor: "pointer", transition: "all 0.15s",
                  background: dragOver ? C.accentSoft : "transparent",
                }}
              >
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.textTertiary} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 12 }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <p style={{ fontSize: 13, color: C.textSecondary, fontWeight: 300, margin: 0 }}>
                  Drop a .pptx file here or click to browse
                </p>
                <input
                  ref={inputRef}
                  type="file"
                  accept=".pptx"
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
                />
              </div>

              {/* File info */}
              {file && (
                <div style={{
                  marginTop: 16, padding: "12px 16px", background: C.accentSoft,
                  borderRadius: 2, display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: C.text, margin: 0 }}>{file.name}</p>
                    <p style={{ fontSize: 11, color: C.textTertiary, margin: 0, marginTop: 2 }}>{formatSize(file.size)}</p>
                  </div>
                  <button
                    onClick={() => setFile(null)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: C.textTertiary, fontSize: 14 }}
                  >&times;</button>
                </div>
              )}

              {/* Error */}
              {errorMsg && (
                <p style={{ fontSize: 12, color: "#e74c3c", marginTop: 12, margin: "12px 0 0" }}>{errorMsg}</p>
              )}

              {/* Upload button */}
              <button
                onClick={handleUpload}
                disabled={!file}
                style={{
                  width: "100%", marginTop: 20, padding: "10px 0",
                  fontSize: 13, fontWeight: 500, fontFamily: "inherit",
                  background: file ? C.text : C.border, color: file ? C.bg : C.textTertiary,
                  border: "none", borderRadius: 2, cursor: file ? "pointer" : "default",
                  transition: "all 0.15s",
                }}
              >
                Upload &amp; Extract Slides
              </button>
            </>
          ) : (
            /* Uploading state */
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              {status !== "done" && status !== "error" && (
                <div style={{
                  width: 32, height: 32, border: `2px solid ${C.border}`, borderTopColor: C.text,
                  borderRadius: "50%", margin: "0 auto 16px",
                  animation: "spin 0.8s linear infinite",
                }} />
              )}
              {status === "done" && (
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.text} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto 16px", display: "block" }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              <p style={{ fontSize: 14, color: C.text, fontWeight: 400, margin: 0 }}>
                {statusText[status] || "Processing..."}
              </p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
